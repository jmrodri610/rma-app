import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
  palette: {
    primary: {
      main: '#00a7d1',
    },
    secondary: {
      main: '#ffcc00',
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default customTheme