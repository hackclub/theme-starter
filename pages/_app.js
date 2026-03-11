import theme from '@hackclub/theme'
import { ThemeUIProvider } from 'theme-ui'
import ColorSwitcher from '../components/color-switcher'

export default function App({ Component, pageProps }) {
  return (
    <ThemeUIProvider theme={theme}>
      <ColorSwitcher />
      <Component {...pageProps} />
    </ThemeUIProvider>
  )
}
