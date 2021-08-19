import * as React from 'react'
import NextApp from 'next/app'
import '@the-innovation-circuit/theme/fonts/fonts.css'
import theme from '@the-innovation-circuit/theme'
import { ThemeProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <ColorSwitcher />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
