import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import LinksColumn from './LinksColumn';
import pcaLogo from 'static/logos/pca-logo.png';
import moment from 'moment';
import OpenNewTabLink from 'components/OpenNewTabLink';
import useMediaQuery from '@mui/material/useMediaQuery';
import { withStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import styles from 'components/Footer/styles';
import Image from 'next/image';

const {
  DATA: { CHURCH_INFO },
} = require('./data');
const {
  DATA: { LINKS_TITLES },
} = require('components/Navbar/data');

const TITLES = Object.keys(LINKS_TITLES);

const Footer = ({
  classes: {
    footer,
    footerContainer,
    footerDivTop,
    footerDivBottom,
    horizontalRow,
    copyText,
  },
}) => {
  const {
    MQ_BREAKPOINTS: { tablet },
  } = useTheme();
  const today = moment();
  const isTablet = useMediaQuery(tablet);
  return (
    <div className={footer}>
      {!isTablet && (
        <Grid container className={footerContainer}>
          <Grid item xs className={footerDivTop}>
            {TITLES.map((linkTitle, i) => {
              return (
                <LinksColumn
                  key={'Footer' + linkTitle + i}
                  linkTitle={linkTitle}
                />
              );
            })}
          </Grid>
          <hr className={horizontalRow} />
        </Grid>
      )}
      <Grid container className={footerContainer}>
        <Grid item xs className={footerDivBottom}>
          <p className={copyText}>
            Copyright © {today.year}
            <br />
            {CHURCH_INFO.name}.
            <br />
            All rights reserved.
          </p>
          <OpenNewTabLink href="https://pcanet.org">
            <Image src={pcaLogo} alt="pca-logo" style={{ height: 100 }} />
          </OpenNewTabLink>
        </Grid>
      </Grid>
    </div>
  );
};

Footer.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Footer);
