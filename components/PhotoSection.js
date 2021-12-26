import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import RouterLink from 'components/RouterLink';
import PhotoCard from 'components/PhotoCard';

const useStyles = makeStyles(({ breakpoints }) => ({
  sectionContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '2rem 1rem',
  },
  sectionDiv: {
    width: '78%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    margin: 0,
    gap: '3rem',
    [breakpoints.down('xs')]: {
      width: '50%',
    },
  },
  sectionWrapper: {
    width: '20rem',
    height: '35rem',
    [breakpoints.down('md')]: {
      width: '17rem',
      height: '26rem',
    },
    [breakpoints.down('sm')]: {
      width: '14.5rem',
      height: '23rem',
    },
    [breakpoints.down('xs')]: {
      height: '18rem',
    },
  },
}));

const PhotoSection = ({ data, bios }) => {
  const { sectionContainer, sectionDiv, sectionWrapper } = useStyles();
  return (
    <Grid item className={sectionContainer}>
      <Grid item className={sectionDiv}>
        {data.map((bioKey, i) => {
          const { fullName, image, role } = bios[bioKey];
          return (
            <div key={'PhotoSection' + bioKey + i} className={sectionWrapper}>
              <RouterLink path={bioKey}>
                <PhotoCard image={image} fullName={fullName} role={role} />
              </RouterLink>
            </div>
          );
        })}
      </Grid>
    </Grid>
  );
};

PhotoSection.propTypes = {
  data: PropTypes.array,
  bios: PropTypes.object,
};

export default PhotoSection;
