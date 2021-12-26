import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { createNavPath } from 'helpers/methods';
import RouterLink from 'components/RouterLink';
import OpenNewTabLink from 'components/OpenNewTabLink';
import useMediaQuery from '@mui/material/useMediaQuery';

const {
  DATA: { LINKS_TITLES, NEW_TAB_LINKS },
} = require('./data');
const {
  DATA: {
    SOCIALS: { envelope },
  },
} = require('components/Footer/data');

const useStyles = makeStyles(
  ({
    STYLES: { column, fontSize, nav, navBoxShadow },
    palette: { primary, secondary, common },
    breakpoints,
  }) => ({
    mobileNavContainer: {
      ...nav,
      bottom: 0,
      boxShadow: navBoxShadow,
      [breakpoints.down('xs')]: {
        padding: '1.5rem',
      },
    },
    mobileNavIconContainer: {
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    mobileNavIcon: {
      width: '2rem',
      height: '2rem',
      margin: 0,
      '&:hover': {
        cursor: 'pointer',
      },
    },
    drawer: {
      [breakpoints.up('xs')]: {
        width: '100%',
        flexShrink: 0,
      },
    },
    appBar: {
      margin: '0 auto',
      padding: 0,
      backgroundColor: common.white,
      color: common.black,
      zIndex: 10,
      '& > div': {
        width: '100%',
        justifyContent: 'space-between',
      },
    },
    drawerPaper: {
      width: '100%',
    },
    closeButtonDiv: {
      margin: '1.5rem 1.5rem',
      width: '4rem',
      height: '4rem',
      '&:hover': {
        color: secondary.lightRed,
        backgroundColor: secondary.pink,
      },
    },
    closeButton: {
      ...fontSize.large,
      fontWeight: 'bold',
      color: common.black,
      '&:hover': {
        color: secondary.complimentMain,
      },
    },
    mobileNavItem: {
      ...column,
      alignItems: 'flex-end',
      padding: '.5rem 3rem',
      '&:hover': {
        backgroundColor: secondary.complimentLight,
      },
    },
    mobileNavMainText: {
      '& > span': {
        ...fontSize.header,
        fontWeight: 500,
        color: primary.light,
      },
    },
    mobileNavSubText: {
      '& > span': {
        ...fontSize.title,
        fontWeight: 400,
        padding: '.2rem 0',
        '&:hover': {
          color: secondary.complimentMain,
        },
      },
    },
  })
);

const TITLES = Object.keys(LINKS_TITLES);
const MOBILE_ICONS = {
  HomeIcon,
  MailOutlineIcon,
};
const MOBILE_ICON_NAMES = Object.keys(MOBILE_ICONS);

const MobileNav = () => {
  const {
    drawer,
    appBar,
    drawerPaper,
    routerLinksWrapper,
    mobileNavIcon,
    mobileNavIconContainer,
    mobileNavItem,
    mobileNavMainText,
    mobileNavSubText,
    closeButtonDiv,
    closeButton,
    mobileNavContainer,
  } = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const {
    MQ_BREAKPOINTS: { mobile, tablet },
  } = theme;
  const isMobile = useMediaQuery(mobile);
  const isTablet = useMediaQuery(tablet);
  const HANDLE_MOBILE_ICONS = {
    HomeIcon: () => router.push('/'),
    MailOutlineIcon: () => window.open(envelope),
  };
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  if (!isMobile && !isTablet) return <></>;
  return (
    <div className={mobileNavContainer}>
      <AppBar
        position="sticky"
        sx={{ position: isMobile ? 'absolute' : 'fixed' }}
        className={appBar}
      >
        <div className={routerLinksWrapper}>
          <Grid container className={mobileNavIconContainer}>
            {MOBILE_ICON_NAMES.map((mobileIcon, i) => {
              const IconComponent = MOBILE_ICONS[mobileIcon];
              const handleClick = HANDLE_MOBILE_ICONS[mobileIcon];
              return (
                <IconComponent
                  key={'BottomNav' + mobileIcon + i}
                  onClick={handleClick}
                  className={mobileNavIcon}
                />
              );
            })}
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon className={mobileNavIcon} />
            </IconButton>
          </Grid>
        </div>
      </AppBar>
      {/* Top: Appbar, Bottom: Drawer */}
      <nav className={drawer}>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'left' : 'right'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <IconButton onClick={handleDrawerToggle} className={closeButtonDiv}>
            <CloseIcon className={closeButton} />
          </IconButton>
          <List>
            {TITLES.map((navTitle, i) => {
              return (
                <ListItem
                  button
                  key={'MobileNavMainTitle' + navTitle + i}
                  className={mobileNavItem}
                >
                  <ListItemText
                    className={mobileNavMainText}
                    primary={navTitle}
                  />
                  {LINKS_TITLES[navTitle].map((navSubTitle, j) => {
                    const navSubTitlePath = createNavPath({
                      main: navTitle,
                      sub: navSubTitle,
                    });
                    const navSubTitleNewTabLink = NEW_TAB_LINKS[navSubTitle];
                    const subTitleKey =
                      'MobileNavSubTitle' + navSubTitle + j + 10;
                    if (!navSubTitleNewTabLink) {
                      return (
                        <RouterLink key={subTitleKey} path={navSubTitlePath}>
                          <ListItemText
                            onClick={handleDrawerToggle}
                            className={mobileNavSubText}
                            primary={navSubTitle}
                          />
                        </RouterLink>
                      );
                    }
                    return (
                      <OpenNewTabLink
                        key={subTitleKey}
                        href={navSubTitleNewTabLink}
                      >
                        <ListItemText
                          onClick={handleDrawerToggle}
                          className={mobileNavSubText}
                          primary={navSubTitle}
                        />
                      </OpenNewTabLink>
                    );
                  })}
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </nav>
    </div>
  );
};

export default MobileNav;
