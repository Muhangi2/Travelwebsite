#!/usr/bin/env python3
"""Find (and optionally delete) images in public/images not referenced in source code."""

import argparse
import os
import re
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMAGES_DIR = ROOT / "public" / "images"
CODE_DIRS = [ROOT / "src", ROOT / "index.html"]
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"}


def collect_referenced_paths() -> set[str]:
    refs: set[str] = set()
    patterns = [
        re.compile(r"'(/images/[^']*)'"),
        re.compile(r'"(/images/[^"]*)"'),
        re.compile(r"/images/[^\s\"'`\)]+"),
    ]
    for d in CODE_DIRS:
        if d.is_file():
            files = [d]
        else:
            files = [
                pathlib.Path(root) / f
                for root, _, fnames in os.walk(d)
                for f in fnames
                if f.endswith((".ts", ".tsx", ".js", ".json", ".html", ".css"))
            ]
        for fp in files:
            text = fp.read_text(encoding="utf-8", errors="replace")
            for pat in patterns:
                for m in pat.finditer(text):
                    p = m.group(1) if m.lastindex else m.group(0)
                    refs.add(p.split("?")[0].rstrip(".,;"))
    return refs


def expand_variants(path: str) -> set[str]:
    stem, ext = os.path.splitext(path)
    if ext.lower() not in IMAGE_EXTS:
        return {path}
    return {stem + e for e in (".webp", ".jpg", ".jpeg", ".png", ".gif", ".svg")}


def all_image_files() -> list[pathlib.Path]:
    return [
        p
        for p in IMAGES_DIR.rglob("*")
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS
    ]


def is_used(rel_path: str, expanded_refs: set[str]) -> bool:
    return rel_path.lower() in {r.lower() for r in expanded_refs}


def remove_empty_dirs(base: pathlib.Path) -> int:
    removed = 0
    for root, dirs, files in os.walk(base, topdown=False):
        root_path = pathlib.Path(root)
        if root_path != base and not any(root_path.iterdir()):
            root_path.rmdir()
            removed += 1
    return removed


def main() -> None:
    parser = argparse.ArgumentParser(description="Audit unused static images")
    parser.add_argument(
        "--delete",
        action="store_true",
        help="Delete unused images and empty directories",
    )
    args = parser.parse_args()

    refs = collect_referenced_paths()
    expanded = set(refs)
    for r in refs:
        expanded.update(expand_variants(r))

    files = all_image_files()
    used, unused = [], []
    for p in files:
        rel = "/" + p.relative_to(ROOT / "public").as_posix()
        (used if is_used(rel, expanded) else unused).append(p)

    used_bytes = sum(p.stat().st_size for p in used)
    unused_bytes = sum(p.stat().st_size for p in unused)

    print(f"Referenced paths: {len(refs)}")
    print(f"Total files: {len(files)}")
    print(f"Used: {len(used)} ({used_bytes / 1024 / 1024:.1f} MB)")
    print(f"Unused: {len(unused)} ({unused_bytes / 1024 / 1024:.1f} MB)")

    if args.delete:
        for p in unused:
            p.unlink()
        dirs_removed = remove_empty_dirs(IMAGES_DIR)
        print(f"Deleted {len(unused)} files, removed {dirs_removed} empty directories")
    elif unused:
        print("\nSample unused (first 20):")
        for p in unused[:20]:
            print(f"  /{p.relative_to(ROOT / 'public').as_posix()}")


if __name__ == "__main__":
    main()
