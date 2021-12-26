import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

const OpenNewTabLink = forwardRef(
  (
    { styleId, klassname, text, href, disabled = false, children = null },
    ref
  ) => {
    return (
      <Link
        ref={ref}
        id={styleId}
        disabled={disabled}
        className={klassname}
        rel="noopener noreferrer"
        href={href}
        target="_blank"
      >
        {children ? children : text}
      </Link>
    );
  }
);

OpenNewTabLink.propTypes = {
  styleId: PropTypes.string,
  ref: PropTypes.object,
  children: PropTypes.node,
  klassname: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.bool,
};

export default OpenNewTabLink;
