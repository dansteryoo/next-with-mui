import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(
  ({ breakpoints, STYLES: { center, column, fontSize, lineHeight } }) => ({
    pageHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      [breakpoints.down('xs')]: {
        ...column,
      },
    },
    pageHeaderDiv: {
      width: '100%',
      display: 'inline-flex',
      justifyContent: 'space-evenly',
      [breakpoints.down('xs')]: {
        display: 'flex',
        ...column,
      },
    },
    headerImage: {
      width: '100%',
      height: '45rem',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      [breakpoints.down('lg')]: {
        height: '28rem',
      },
      [breakpoints.down('md')]: {
        height: '20rem',
      },
      [breakpoints.down('sm')]: {
        height: '16rem',
      },
      [breakpoints.down('xs')]: {
        height: '11rem',
      },
    },
    headerNoImage: {
      width: '100%',
    },
    headerDiv: {
      ...center,
      justifyContent: 'flex-start',
      ...column,
      margin: '8rem 0 4rem',
      [breakpoints.down('sm')]: {
        margin: '5rem 0 2rem',
      },
    },
    headerTitle: {
      ...fontSize.large,
      fontWeight: 'bold',
      width: '50%',
      [breakpoints.down('md')]: {
        width: 'auto',
      },
      [breakpoints.down('sm')]: {
        ...fontSize.header,
      },
    },
    headerDescription: {
      minWidth: 685,
      width: '50%',
      ...fontSize.main,
      ...lineHeight.tiles,
      margin: '5rem 0 0',
      [breakpoints.down('md')]: {
        minWidth: 0,
      },
      [breakpoints.down('sm')]: {
        margin: '3rem 0 0',
        ...fontSize.subtext,
      },
      [breakpoints.down('xs')]: {
        ...lineHeight.mobile,
      },
    },
  })
);

const PageHeader = ({ children, backgroundImage, title }) => {
  const {
    pageHeader,
    pageHeaderDiv,
    headerImage,
    headerNoImage,
    headerDiv,
    headerTitle,
    headerDescription,
  } = useStyles();
  const headerStyle = backgroundImage ? headerImage : headerNoImage;
  return (
    <Grid container className={pageHeader}>
      <Grid item className={pageHeaderDiv}>
        <div
          className={headerStyle}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <Grid item className={headerDiv}>
            <h1 className={headerTitle}>{title}</h1>
            {children ? (
              <p className={headerDescription}>{children}</p>
            ) : (
              <br />
            )}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

PageHeader.propTypes = {
  children: PropTypes.any,
  backgroundImage: PropTypes.string,
  title: PropTypes.string,
};

export default PageHeader;
