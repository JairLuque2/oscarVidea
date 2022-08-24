import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
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
        primary:{
            main: '#1b003a'
        },
        secondary:{
            main: '#56008c'
        },
        error:{
            main: red.A400
        },
        action:{
            main: '#fff'
        }
    }
})