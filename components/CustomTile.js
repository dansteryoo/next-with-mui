import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

const useStyles = makeStyles(
  ({
    STYLES: { column, fontSize, lineHeight },
    palette: {
      primary: { light },
    },
    button: {
      boxShadow: { paper },
    },
    breakpoints,
  }) => ({
    root: {
      display: 'flex',
      ...column,
      minWidth: '15rem',
      width: '100%',
      height: 'auto',
      boxShadow: paper.white,
      padding: '2rem',
      margin: '1rem',
      borderRadius: '.5rem',
      boxSizing: 'border-box',
      [breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    title: {
      ...fontSize.title,
      color: light,
      fontWeight: 'bold',
      justifyContent: 'flex-start',
      margin: '0 0 .75rem',
      [breakpoints.down('sm')]: {
        ...fontSize.main,
        margin: '.5rem 0 .75rem',
      },
    },
    content: {
      ...fontSize.main,
      ...lineHeight.tiles,
      [breakpoints.down('sm')]: {
        ...fontSize.subtext,
      },
    },
  })
);

const CustomTile = ({
  children,
  tileTitle,
  tileId,
  icon,
  handleClick,
  klassname,
}) => {
  const { root, title, content } = useStyles();
  const rootClassName = classnames(klassname, root);
  return (
    <Paper className={rootClassName} id={tileId} onClick={handleClick}>
      {icon}
      <div className={title}>{tileTitle}</div>
      <div className={content}>{children}</div>
    </Paper>
  );
};

CustomTile.propTypes = {
  children: PropTypes.any,
  tileTitle: PropTypes.string,
  tileId: PropTypes.string,
  icon: PropTypes.node,
  handleClick: PropTypes.func,
  klassname: PropTypes.string,
};

export default CustomTile;
