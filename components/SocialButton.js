import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import Image from 'next/image';

const useStyles = makeStyles(({ STYLES: { mobileButton, left } }) => ({
  root: {
    ...mobileButton.main,
    width: '300px !important',
  },
  wrapper: {
    width: '100%',
  },
  wrapperWithSvg: {
    ...left,
    width: '100%',
  },
  svgIcon: {
    display: 'flex',
    alignItem: 'center',
    margin: '0 1rem',
  },
}));

const SocialButton = ({
  icon,
  klassname,
  text,
  disabled = false,
  handleClick = null,
}) => {
  const { root, svgIcon, wrapper, wrapperWithSvg } = useStyles();
  const buttonClass = classnames(klassname, root);
  const wrapperClass = icon ? wrapperWithSvg : wrapper;
  return (
    <Button className={buttonClass} onClick={handleClick} disabled={disabled}>
      <div className={wrapperClass}>
        {icon && (
          <div className={svgIcon}>
            <Image style={{ width: 20 }} src={icon} alt="" />
          </div>
        )}
        {text}
      </div>
    </Button>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.string,
  klassname: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default SocialButton;
