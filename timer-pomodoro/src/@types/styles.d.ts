import 'styled-components'
import { defaultTheme } from '../themes/styles/default'

type ThemeType =  typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}