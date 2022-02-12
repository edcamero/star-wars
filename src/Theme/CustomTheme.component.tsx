
import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'
import React from 'react'

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Theme {
    status: {
      cancel: string
      delete?: string
      edit?: string
    }
  }
  // allow configuration using `createTheme`
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface ThemeOptions {
    status?: {
      cancel?: string
      delete?: string
      edit?: string
    }
  }
}
let theme = createTheme({
  palette: {
    text: {
      primary: '#353535',
      disabled: '#99999',
    },
    background: {
      paper: '#ffff',
      default: '#ffff',
    },
  },
  status: {
    cancel: '#ffff',
    delete: red[700],
  },
})

theme = responsiveFontSizes(theme)

const CustomTheme: React.FC = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  )
}
export default CustomTheme
