import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

const useStyles = makeStyles(({ STYLES: { mobileButton }, breakpoints }) => ({
  root: {
    ...mobileButton.main,
    '&:hover': {
      ...mobileButton.hover,
    },
    [breakpoints.down('md')]: {
      padding: '.5rem',
      minWidth: '15rem',
    },
    [breakpoints.down('sm')]: {
      ...mobileButton.sm,
    },
  },
}));

const CustomButton = ({
  styleId,
  klassname,
  text,
  disabled = false,
  path,
  handleClick = null,
}) => {
  const router = useRouter();
  const { root } = useStyles();
  const buttonClass = classnames(klassname, root);
  return (
    <Button
      id={styleId}
      className={buttonClass}
      onClick={handleClick ? handleClick : () => router.push(path)}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

CustomButton.propTypes = {
  styleId: PropTypes.string,
  klassname: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  path: PropTypes.string,
  handleClick: PropTypes.func,
};

export default CustomButton;
