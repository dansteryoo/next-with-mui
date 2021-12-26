import React from 'react';
import Dropdown from 'components/Navbar/Dropdown';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

const {
  DATA: { LINKS_TITLES },
} = require('./data');

const useStyles = makeStyles(
  ({ STYLES: { nav, center, navBoxShadow, fontSize }, breakpoints }) => ({
    topNavContainer: {
      ...nav,
      height: 25,
      padding: '2rem',
      top: 0,
      boxShadow: navBoxShadow,
      [breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    routerLinksWrapper: {
      ...center,
      width: '50%',
    },
    routerLinksDiv: {
      ...center,
      ...fontSize.main,
      minWidth: 600,
      width: '100%',
      justifyContent: 'space-between',
      fontWeight: 600,
      [breakpoints.down('lg')]: {
        width: '75%',
        marginLeft: '5rem',
      },
      [breakpoints.down('sm')]: {
        width: '50%',
        display: 'none',
        margin: 0,
        minWidth: 0,
      },
    },
    logo: {
      position: 'absolute',
      top: 5,
      left: 20,
      height: '3rem',
      width: '3rem',
      margin: '1rem .5rem',
      borderRadius: '50%',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  })
);

const TITLES = Object.keys(LINKS_TITLES);

const TopNav = () => {
  const { topNavContainer, logo, routerLinksWrapper, routerLinksDiv } =
    useStyles();
  const router = useRouter();
  return (
    <div className={topNavContainer}>
      <Image
        onClick={() => router.push('/')}
        className={logo}
        src="https://www.iconsdb.com/icons/preview/yellow/circle-xxl.png"
        href="/"
        alt="logo"
        width="25px"
        height="25px"
      />
      <div className={routerLinksWrapper}>
        <div className={routerLinksDiv}>
          {TITLES.map((linkTitle, i) => {
            return (
              <Dropdown key={'TopNav' + linkTitle + i} linkTitle={linkTitle} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
