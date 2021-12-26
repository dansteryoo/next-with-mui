import React from 'react';
import PropTypes from 'prop-types';
import OpenNewTabLink from 'components/OpenNewTabLink';
import Grid from '@mui/material/Grid';
import { withStyles } from '@mui/styles';
import styles from 'components/Footer/styles';
const {
  DATA: { CHURCH_INFO, SOCIALS },
} = require('./data');

const SOCIAL_NAMES = Object.keys(SOCIALS);
const SOCIAL_URLS = Object.values(SOCIALS);
const SOCIAL_ICONS = SOCIAL_NAMES.reduce((acc, socialName) => {
  const klassname = socialName.includes('facebook')
    ? `fab fa-${socialName}-f`
    : socialName.includes('envelope')
    ? `far fa-${socialName}`
    : `fab fa-${socialName}`;
  acc.push(klassname);
  return acc;
}, []);

const PreFooter = ({ classes }) => {
  return (
    <div className={classes.preFooter}>
      <Grid container>
        <Grid item xs className={classes.contentContainer}>
          <Grid item xs className={classes.contentDiv}>
            <Grid item xs className={classes.contentTitle}>
              {CHURCH_INFO.location}
            </Grid>
            <Grid item xs className={classes.contentAddress}>
              {CHURCH_INFO.address}
            </Grid>
            <Grid item xs className={classes.contentAddress}>
              {CHURCH_INFO.phone}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className={classes.socialContainer}>
        <Grid container className={classes.socialDiv}>
          {SOCIAL_ICONS.map((klassname, index) => {
            return (
              <Grid item xs key={klassname} className={classes.socials}>
                <OpenNewTabLink href={SOCIAL_URLS[index]}>
                  <i id="socials" className={klassname} />
                </OpenNewTabLink>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

PreFooter.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PreFooter);
