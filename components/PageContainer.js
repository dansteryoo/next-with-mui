import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

const useStyles = makeStyles(({ breakpoints, STYLES: { column } }) => ({
  SectionContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '4rem 0',
    [breakpoints.down('xs')]: {
      ...column,
      margin: '1rem 0',
    },
  },
  SectionContainerDiv: {
    display: 'inline-flex',
    [breakpoints.down('md')]: {
      display: 'flex',
      ...column,
      alignItems: 'center',
    },
  },
}));

const SectionContainer = ({ children, klassname }) => {
  const { SectionContainer, SectionContainerDiv } = useStyles();
  const containerDivStyle = classnames(klassname, SectionContainerDiv);
  return (
    <Grid container className={SectionContainer}>
      <Grid item className={containerDivStyle}>
        {children}
      </Grid>
    </Grid>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.any,
  klassname: PropTypes.string,
};

export default SectionContainer;
