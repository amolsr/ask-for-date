import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: "#FFFFFF",
        },
    },
});

export default theme;