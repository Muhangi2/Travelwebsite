/**
 * Image optimization script.
 * Converts every JPG/PNG/WebP in public/images to a compressed WebP.
 * Originals are left untouched; the .webp file is created/overwritten.
 *
 * Usage:  node scripts/optimize-images.mjs
 */

import { readdir, stat } from 'node:fs/promises'
import { join, extname, basename } from 'node:path'
import sharp from 'sharp'

const SRC_DIR = new URL('../public/images', import.meta.url).pathname

// Max dimension — resize if wider/taller than this (keeps aspect ratio)
const MAX_PX = 1920
// WebP quality 0-100
const QUALITY = 78

let processed = 0
let skipped = 0
let errors = 0

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
    } else {
      await processFile(full)
    }
  }
}

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return

  // Skip existing .webp if there's a fresh source alongside (we'll overwrite it via the source)
  // But DO re-encode existing .webp files that are too large (>150 KB)
  if (ext === '.webp') {
    const { size } = await stat(filePath)
    if (size <= 150 * 1024) {
      skipped++
      return // already small enough
    }
  }

  // Output path: always .webp next to the source
  const outPath = filePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp')

  try {
    await sharp(filePath)
      .resize({ width: MAX_PX, height: MAX_PX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 4 })
      .toFile(outPath + '.tmp')

    // Atomic rename so we never leave a broken file
    const { rename } = await import('node:fs/promises')
    await rename(outPath + '.tmp', outPath)

    const { size: inSize } = await stat(filePath)
    const { size: outSize } = await stat(outPath)
    const saved = Math.round((1 - outSize / inSize) * 100)
    console.log(`✓ ${basename(filePath).padEnd(55)} ${kb(inSize)} → ${kb(outSize)} (−${saved}%)`)
    processed++
  } catch (err) {
    console.error(`✗ ${filePath}: ${err.message}`)
    errors++
  }
}

function kb(bytes) {
  return (bytes / 1024).toFixed(0).padStart(5) + ' KB'
}

console.log(`\nOptimizing images in: ${SRC_DIR}\n`)
await walk(SRC_DIR)
console.log(`\nDone — ${processed} optimized, ${skipped} already small, ${errors} errors.\n`)
