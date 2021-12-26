import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MaterialLink from '@mui/material/Link';
import RouterLink from 'components/RouterLink';
import OpenNewTabLink from 'components/OpenNewTabLink';
import { withStyles, makeStyles } from '@mui/styles';
import { createNavPath } from 'helpers/methods';
import theme from 'app/theme';

const {
  DATA: { LINKS_TITLES, NEW_TAB_LINKS },
} = require('./data');

const StyledMenu = withStyles({
  paper: {
    ...theme.STYLES.center,
    borderRadius: 0,
  },
  list: {
    margin: '1rem 0 0 0',
    '& > li': {
      padding: '1rem 0 1.5rem',
      margin: 0,
    },
  },
})((props) => (
  <Menu
    elevation={0}
    getcontentanchorel={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const useStyles = makeStyles(
  ({
    STYLES: { fontSize },
    palette: {
      secondary: { complimentMain, complimentLight },
    },
  }) => ({
    dropdownMenu: {
      padding: '1rem 0',
    },
    dropdownItems: {
      ...fontSize.subtext,
      padding: '1rem 1.5rem',
      alignItems: 'center',
      '&:focus': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        color: complimentMain,
        backgroundColor: complimentLight,
      },
    },
  })
);

const Dropdown = ({ linkTitle }) => {
  const { dropdownItems, linkTitleClass } = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <div>
        <MaterialLink className={linkTitleClass} onClick={handleClick}>
          {linkTitle}
        </MaterialLink>
        <StyledMenu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose, onClick: handleClose }}
        >
          {LINKS_TITLES[linkTitle].map((listItem, i) => {
            const listItemPath = createNavPath({
              main: linkTitle,
              sub: listItem,
            });
            const newTabLink = NEW_TAB_LINKS[listItem];
            if (!newTabLink) {
              return (
                <RouterLink key={listItem + i} path={listItemPath}>
                  <MenuItem className={dropdownItems}>{listItem}</MenuItem>
                </RouterLink>
              );
            }
            return (
              <OpenNewTabLink key={listItem + i} href={newTabLink}>
                <MenuItem className={dropdownItems}>{listItem}</MenuItem>
              </OpenNewTabLink>
            );
          })}
        </StyledMenu>
      </div>
    </>
  );
};

Dropdown.propTypes = {
  linkTitle: PropTypes.string,
};

export default Dropdown;
