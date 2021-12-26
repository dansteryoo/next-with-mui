import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

const photoCardMobileStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const useStyles = makeStyles(({ breakpoints, STYLES: { fontSize } }) => ({
  photoCardDiv: {
    '&:hover': {
      cursor: 'pointer',
    },
    [breakpoints.down('xs')]: {
      ...photoCardMobileStyle,
    },
  },
  photoCardDivNoHover: {
    margin: '0 3rem 2rem',
    '&:hover': {
      cursor: 'auto',
    },
    [breakpoints.down('sm')]: {
      margin: '0 0 2rem',
      ...photoCardMobileStyle,
    },
  },
  photoCardFullname: {
    ...fontSize.title,
    margin: '1rem 0 .5rem',
    [breakpoints.down('md')]: {
      margin: '1rem 0 .5rem',
    },
  },
  photoCardRole: {
    ...fontSize.subtext,
    letterSpacing: '.25rem',
    [breakpoints.down('md')]: {
      ...fontSize.tiny,
      letterSpacing: '.2rem',
    },
  },
  photo: {
    height: 350,
    [breakpoints.down('md')]: {
      height: 300,
    },
    [breakpoints.down('sm')]: {
      height: 250,
    },
    [breakpoints.down('xs')]: {
      height: 200,
    },
  },
}));

const PhotoCard = ({ image, fullName, role, disableHover = false }) => {
  const {
    photoCardDivNoHover,
    photoCardDiv,
    photoCardFullname,
    photoCardRole,
    photo,
  } = useStyles();
  const hoverStyle = disableHover ? photoCardDivNoHover : photoCardDiv;
  return (
    <Grid item className={hoverStyle}>
      <Image src={image} alt="bio" className={photo} />
      <p className={photoCardFullname}>{fullName}</p>
      <span className={photoCardRole}>{role.toUpperCase()}</span>
    </Grid>
  );
};

PhotoCard.propTypes = {
  disableHover: PropTypes.bool,
  classes: PropTypes.object,
  image: PropTypes.string,
  fullName: PropTypes.string,
  role: PropTypes.string,
};

export default PhotoCard;
