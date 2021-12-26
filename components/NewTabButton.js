import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import CustomButton from 'components/CustomButton';
import OpenNewTabLink from 'components/OpenNewTabLink';

const useStyles = makeStyles(
  ({
    breakpoints,
    palette: {
      primary: { light },
    },
    button: { border },
  }) => ({
    newTabWrapper: {
      [breakpoints.down('md')]: {
        margin: '1rem 0',
      },
    },
    buttonClass: {
      color: light,
      '&:hover': {
        border: border.complimentMain,
      },
    },
  })
);

const NewTabButton = ({
  wrapperStyleId,
  buttonStyleId,
  buttonText,
  href,
  disabled = false,
}) => {
  const { newTabWrapper, buttonClass } = useStyles();
  return (
    <OpenNewTabLink
      styleId={wrapperStyleId}
      klassname={newTabWrapper}
      href={href}
    >
      <CustomButton
        styleId={buttonStyleId}
        klassname={buttonClass}
        text={buttonText}
        disabled={disabled}
      />
    </OpenNewTabLink>
  );
};

NewTabButton.propTypes = {
  wrapperStyleId: PropTypes.string,
  buttonStyleId: PropTypes.string,
  buttonText: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default NewTabButton;
