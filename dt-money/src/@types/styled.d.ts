import 'styled-components'
import { defaultTheme } from '../styles/theme/defaul'

declare module 'styled-components' {
  type ThemeType = typeof defaultTheme
  export interface DefaultTheme extends ThemeType {}
}
