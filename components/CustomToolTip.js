import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles(
  ({ STYLES: { fontSize }, palette: { primary, common } }) => ({
    tooltip: {
      backgroundColor: primary.dark,
      color: common.white,
      maxWidth: 400,
    },
    content: {
      padding: '.5rem',
      ...fontSize.subtext,
      fontWeight: 400,
      lineHeight: '1.5rem',
    },
  })
);

const CustomToolTip = ({ message, children }) => {
  const { tooltip, content } = useStyles();
  const {
    MQ_BREAKPOINTS: { mobile },
  } = useTheme();
  const isMobile = useMediaQuery(mobile);
  if (isMobile) return <>{children}</>;
  return (
    <Tooltip
      arrow
      placement="top"
      classes={{
        tooltip: tooltip,
      }}
      title={<div className={content}>{message}</div>}
    >
      {children}
    </Tooltip>
  );
};

CustomToolTip.propTypes = {
  children: PropTypes.any,
  message: PropTypes.string,
};

export default CustomToolTip;
