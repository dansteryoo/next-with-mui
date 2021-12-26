import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import MuiLink from '@mui/material/Link';

const RouterLink = forwardRef(
  ({ klassname, text, path, disabled = false, children = null }, ref) => {
    return (
      <MuiLink id="links" disabled={disabled}>
        {children ? children : text}
      </MuiLink>
    );
  }
);

RouterLink.propTypes = {
  ref: PropTypes.object,
  children: PropTypes.any,
  klassname: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default RouterLink;
