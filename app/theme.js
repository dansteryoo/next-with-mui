import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: {
    main: '#000',
    light: '#038DF8',
    dark: '#142436',
  },
  secondary: {
    main: '#cc0000',
    complimentMain: '#f19857',
    complimentLight: '#fceadd',
    yellow: '#ffeb49',
    yellowHover: '#7F7524',
    green: '#4caf50',
    greenHover: '#357a38',
    redHover: '#8e0000',
    purple: '#7e35cc',
    purpleHover: '#46207f',
    gray: '#999999',
    grayHover: '#666666',
    pink: '#f4cccc',
    orangeRed: '#f44336',
    greenCheck: '#00e676',
    lightRed: '#ff595e',
    lightYellow: '#fff080',
    lightBlue: '#80bdff',
    lightPurple: '#cfcef2',
    lightGray: '#dcdcdc',
    darkPurple: '#7e35cc',
  },
  social: {
    facebook: '#3B5998',
    facebookHover: '#293E69',
    google: '#1669F2',
    googleHover: '#4285f4',
  },
  common: {
    white: '#fff',
    black: '#000',
  },
};

const borders = {
  black: '1px solid black',
  complimentMain: '1px solid #f19857',
  orangeRed: '1px solid #f44336',
  white: '1px solid #dcdcdc',
  light: '1px solid #038DF8',
};

const breakpoints = {
  values: {
    xs: 450,
    sm: 700,
    md: 1080,
    lg: 1280,
    xl: 1920,
  },
};

const column = { flexDirection: 'column' };
const center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const boxShadow = (color) => `0 10px 20px -10px ${color}`;

const theme = createTheme({
  breakpoints,
  palette: {
    ...colors,
  },
  button: {
    boxShadow: {
      inputs: {
        gray: boxShadow('rgb(220, 220, 220)'),
      },
      paper: {
        white:
          '8px 14px 38px rgb(39 44 49 / 6%), 1px 3px 8px rgb(39 44 49 / 3%)',
      },
      icon: {
        light: boxShadow(colors.primary.light),
        complimentMain: boxShadow(colors.secondary.complimentMain),
      },
      social: {
        google: boxShadow(colors.social.google),
        facebook: boxShadow(colors.social.facebook),
      },
    },
    border: borders,
    format: {
      social: {
        color: '#fff',
        width: '400px',
        height: '50px',
        padding: '12px',
        border: 'none',
        borderRadius: '4px',
        margin: '1rem 0',
        display: 'inline-block',
        fontSize: '17px',
        lineHeight: '20px',
        textDecoration: 'none',
      },
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: `Jost, Averta-Regular, Avenir, Helvetica Neue, Calibri, Helvetica, Roboto, sans-serif`,
    fontSize: 12,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
  MQ_BREAKPOINTS: {
    mobile: `(max-width:${breakpoints.values.xs}px)`,
    tablet: `(max-width:${breakpoints.values.sm}px)`,
    laptops: `(max-width:${breakpoints.values.lg}px)`,
    desktop: `(min-width:${breakpoints.values.lg}px)`,
  },
  STYLES: {
    center,
    column,
    container: { width: '100%', height: '100%' },
    left: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    right: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    inputRoot: {
      root: {
        ...center,
        ...column,
        padding: '0 1rem .75rem !important',
        width: '100%',
      },
      withErrors: {
        padding: '.75rem 1rem 0 !important',
      },
    },
    fontSize: {
      large: { fontSize: '3rem' },
      header: { fontSize: '2rem' },
      title: { fontSize: '1.5rem' },
      main: { fontSize: '1.2rem' },
      subtext: { fontSize: '1rem' },
      tiny: { fontSize: '.8rem' },
    },
    navBoxShadow: `0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)`,
    nav: {
      zIndex: 10,
      position: 'sticky',
      backgroundColor: colors.common.white,
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      padding: 0,
      margin: 0,
    },
    dialogImage: {
      minWidth: '100%',
      minHeight: '100%',
      objectFit: 'cover',
    },
    previewImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    lineHeight: {
      mobile: {
        lineHeight: '1.5rem',
      },
      tiles: {
        lineHeight: '2rem',
      },
      body: {
        lineHeight: '2.5rem',
      },
      header: {
        lineHeight: '3rem',
      },
    },
    mobileButton: {
      main: {
        color: '#038DF8',
        minWidth: '17rem',
        fontSize: '1.2rem',
        fontWeight: 500,
        padding: '.5rem 0',
        margin: '1rem',
        backgroundColor: colors.common.white,
        textDecoration: 'none',
        border: borders.light,
        borderRadius: 4,
      },
      hover: {
        color: colors.common.white,
        border: borders.complimentMain,
        backgroundColor: colors.secondary.complimentMain,
        textDecoration: 'none',
      },
      sm: {
        width: '16rem',
        color: colors.secondary.light,
        border: borders.light,
        fontSize: '.8rem',
        padding: '.5rem 0',
        '&:hover': {
          border: borders.complimentMain,
        },
      },
    },
  },
});

export default theme;
