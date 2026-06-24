import {ThemeProvider, studioTheme} from '@sanity/ui'
import type {LayoutProps} from 'sanity'

export function DarkLayout(props: LayoutProps) {
  return (
    <ThemeProvider theme={studioTheme} scheme="dark">
      {props.renderDefault(props)}
    </ThemeProvider>
  )
}
