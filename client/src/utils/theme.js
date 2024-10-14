// src/theme.js
import { createTheme } from '@mui/material/styles';

// Define common theme properties
const commonTheme = {
  typography: {
    fontFamily: [
      '"Inter"', // Inter font family
      '"Poppins"', // Poppins font family
      '"sans-serif"',
    ].join(','),
  },
  shadows: [
    "none",
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD", // shadow 100
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF", // shadow 200
    "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD", // shadow 300
    "inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)", // shadow 400
    "0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)", // shadow 500
  ],
  shape: {
    borderRadius: 14, // default border radius
  },
  transitions: {
    duration: {
      standard: 300, // customize transition durations if needed
    },
    property: {
      borderColor: 'border-color', // custom transition properties
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px', // Example: override button default border-radius
        },
      },
    },
  },
  zIndex: {
    appBar: 1,
    drawer: 2,
    modal: 4,
  },
};

// Create separate themes for light and dark modes
const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'light', // Set mode to light
    primary: {
      main: "#2EF2FF", // p1 color
    },
    secondary: {
      main: "#3C52D9", // p2 color
    },
    success: {
      main: "#C8EA80", // p3 color
    },
    info: {
      main: "#EAEDFF", // p4 color
    },
    warning: {
      main: "#C4CBF5", // p5 color
    },
    background: {
      default: "#ffffff", // Light background color
      paper: "#f4f6f8",
    },
    text: {
      primary: "#0C1838", // Text primary color
      secondary: "#334679", // Text secondary color
    },
  },
});

const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: 'dark', // Set mode to dark
    primary: {
      main: "#2EF2FF", // p1 color
    },
    secondary: {
      main: "#3C52D9", // p2 color
    },
    success: {
      main: "#C8EA80", // p3 color
    },
    info: {
      main: "#EAEDFF", // p4 color
    },
    warning: {
      main: "#C4CBF5", // p5 color
    },
    background: {
      default: "#080D27", // Dark background color
      paper: "#0C1838",
    },
    text: {
      primary: "#EAEDFF", // Light text on dark background
      secondary: "#C4CBF5",
    },
    black: {
      main: "#000000",
      dark: "#05091D",
    },
  },
});

export { lightTheme, darkTheme };
