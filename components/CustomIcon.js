import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import Image from 'next/image';

const useStyles = makeStyles(
  ({
    STYLES: { center },
    palette: {
      primary: { light },
      common: { white },
    },
    button: {
      boxShadow: { icon },
    },
  }) => ({
    root: {
      ...center,
      backgroundColor: light,
      color: white,
      margin: '0 0 1rem',
      position: 'relative',
      padding: '1rem',
      borderRadius: '100%',
      boxShadow: icon.light,
      width: '1.5rem',
      height: '1.5rem',
      fontSize: '1.5rem',
    },
    icon: {
      color: white,
    },
  })
);

const CustomIcon = ({ children, iconSrc }) => {
  const { root, icon } = useStyles();
  return (
    <div className={root}>
      {children ? (
        children
      ) : (
        <Image src={iconSrc} alt="tile-icon" className={icon} />
      )}
    </div>
  );
};

CustomIcon.propTypes = {
  children: PropTypes.any,
  iconSrc: PropTypes.string,
};

export default CustomIcon;
