import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material'
import React from 'react'
import { AppRouter } from './router/AppRouter'

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const purpleTheme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 90
        }
      }
    }
  },
  palette: {
    primary: {
      main: '#1b003a'
    },
    secondary: {
      main: '#56008c'
    },
    error: {
      main: red.A400
    },
    action: {
      main: '#fff'
    }
  }
})

export const CancionesApp = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />

      <AppRouter />
    </ThemeProvider>
  )
}
