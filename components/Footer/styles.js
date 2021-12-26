const styles = ({
  STYLES: { center, column, fontSize, lineHeight },
  palette: {
    primary: { dark, light },
    secondary: { complimentMain },
    common: { white },
  },
  button: { border },
  breakpoints,
}) => {
  const footerLinkStyles = {
    alignItems: 'center',
    ...fontSize.main,
    padding: 0,
    margin: '0 1rem',
    color: white,
    '&:hover': {
      color: complimentMain,
    },
    [breakpoints.down('md')]: {
      ...fontSize.subtext,
      margin: '0 .6rem',
      fontWeight: 300,
    },
  };
  return {
    footer: {
      ...center,
      bottom: 0,
      backgroundColor: dark,
      padding: '5rem 0 2.5rem',
      margin: 0,
      ...column,
      color: white,
      [breakpoints.down('md')]: {
        padding: '2.5rem 0',
      },
    },
    footerContainer: {
      minWidth: '60rem',
      display: 'inline-flex',
      width: '80%',
      [breakpoints.down('md')]: {
        minWidth: 700,
      },
      [breakpoints.down('sm')]: {
        justifyContent: 'center',
        minWidth: 0,
        width: '90%',
      },
    },
    footerDivTop: {
      display: 'flex',
      ...lineHeight.header,
      justifyContent: 'space-between',
      [breakpoints.down('md')]: {
        ...lineHeight.body,
      },
    },
    footerDivBottom: {
      margin: '0 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      [breakpoints.down('lg')]: {
        margin: '0 3rem',
      },
      [breakpoints.down('sm')]: {
        margin: 0,
        ...fontSize.subtext,
      },
    },
    footerTitle: {
      fontSize: '1.8rem',
      fontWeight: 300,
      color: light,
      margin: 0,
      [breakpoints.down('md')]: {
        ...fontSize.main,
      },
    },
    footerLinks: {
      '& > a': {
        ...footerLinkStyles,
      },
    },
    linksColumnContainer: {
      ...column,
    },
    footerNewTabs: {
      ...footerLinkStyles,
    },
    horizontalRow: {
      width: '100%',
      border: border.light,
      margin: '4rem 0 2rem',
    },
    copyText: {
      ...center,
      ...fontSize.main,
      ...lineHeight.mobile,
      [breakpoints.down('md')]: {
        ...fontSize.tiny,
      },
      [breakpoints.down('xs')]: {
        margin: '0 6rem 0 0',
      },
    },
    preFooter: {
      bottom: 0,
      backgroundColor: light,
      height: '7rem',
      display: 'flex',
      padding: '2rem',
      margin: '10rem 0 0',
      [breakpoints.down('md')]: {
        height: '12rem',
        ...column,
        padding: '1rem 2rem 3rem',
      },
      [breakpoints.down('sm')]: {
        height: '15rem',
        margin: '5rem 0 0',
      },
    },
    contentContainer: {
      display: 'flex',
      ...column,
      alignItems: 'flex-end',
      width: '100%',
      ...lineHeight.tiles,
      fontWeight: 'bold',
      [breakpoints.down('md')]: {
        alignItems: 'center',
      },
    },
    contentDiv: {
      minWidth: 370,
      [breakpoints.down('md')]: {
        margin: '2rem 0 0',
      },
      [breakpoints.down('xs')]: {
        margin: '1rem 0',
        minWidth: 0,
      },
    },
    contentTitle: {
      ...fontSize.title,
      margin: '.3rem 0 0 0',
      color: dark,
      [breakpoints.down('md')]: {
        ...center,
        margin: 0,
      },
      [breakpoints.down('xs')]: {
        ...fontSize.main,
      },
    },
    contentAddress: {
      ...fontSize.main,
      color: white,
      fontWeight: 400,
      [breakpoints.down('md')]: {
        ...center,
        ...fontSize.subtext,
      },
      [breakpoints.down('xs')]: {
        ...fontSize.tiny,
      },
    },
    socialContainer: {
      width: '100%',
      justifyContent: 'flex-start',
      margin: '0 10% 0 20%',
      [breakpoints.down('lg')]: {
        ...center,
        margin: '0 5% 0 10%',
        height: 100,
      },
      [breakpoints.down('md')]: {
        alignItems: 'flex-end',
        margin: 0,
      },
    },
    socialDiv: {
      alignItems: 'center',
      [breakpoints.down('md')]: {
        width: '40rem',
        marginTop: '1rem',
      },
      [breakpoints.down('sm')]: {
        marginTop: 0,
      },
      [breakpoints.down('xs')]: {
        width: '13rem',
        marginBottom: '1rem',
        justifyContent: 'center',
      },
    },
    socials: {
      ...center,
      [breakpoints.down('xs')]: {
        margin: '1rem',
        width: '2rem',
        height: '2rem',
      },
    },
  };
};

export default styles;
