import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';

const CornerRibbon = ({ text, backgroundColor, fontColor = '#fff' }) => {
  const {
    palette: { secondary },
  } = useTheme();

  backgroundColor =
    text === 'public'
      ? secondary.green
      : text === 'draft'
      ? secondary.gray
      : '#000';
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        overflow: 'hidden',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          position: 'absolute',
          // transform: 'rotate(-45deg)',
          // WebkitTransform: 'rotate(-45deg)',
          padding: '.5rem 3rem',
          zIndex: 1,
          textAlign: 'center',
          letterSpacing: '2px',
          fontSize: '14px',
          pointerEvents: 'auto',
          // position: 'fixed',
          boxShadow: '0 0 3px rgba(0,0,0,.3)',
          top: 0,
          right: 0,
          transform:
            'translateY(-100%) rotate(90deg) translateX(70.71067811865476%) rotate(-45deg)',
          transformOrigin: 'bottom right',
          WebkitTransform:
            'translateY(-100%) rotate(90deg) translateX(70.71067811865476%) rotate(-45deg)',
          ...(backgroundColor && { backgroundColor }),
          ...(fontColor && { color: fontColor }),
        }}
      >
        {text}
      </div>
    </div>
  );
};

CornerRibbon.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default CornerRibbon;
