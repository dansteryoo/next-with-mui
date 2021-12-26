import React from 'react';
import PropTypes from 'prop-types';
import OpenNewTabLink from 'components/OpenNewTabLink';
import Grid from '@mui/material/Grid';
import RouterLink from 'components/RouterLink';
import { withStyles } from '@mui/styles';
import styles from 'components/Footer/styles';
import { createNavPath } from 'helpers/methods';

const {
  DATA: { LINKS_TITLES, NEW_TAB_LINKS },
} = require('components/Navbar/data');

const LinksColumn = ({
  classes: { linksColumnContainer, footerTitle, footerLinks, footerNewTabs },
  linkTitle,
}) => {
  return (
    <Grid container className={linksColumnContainer}>
      <p className={footerTitle}>{linkTitle}</p>
      {LINKS_TITLES[linkTitle].map((listItem, i) => {
        const listItemPath = createNavPath({
          main: linkTitle,
          sub: listItem,
        });
        const newTabLink = NEW_TAB_LINKS[listItem];
        if (!newTabLink) {
          return (
            <RouterLink
              key={'LinksColumn' + listItem + i}
              klassname={footerLinks}
              text={listItem}
              path={listItemPath}
            />
          );
        }
        return (
          <OpenNewTabLink
            key={'LinksColumn' + listItem + i}
            klassname={footerNewTabs}
            text={listItem}
            href={newTabLink}
          />
        );
      })}
    </Grid>
  );
};

LinksColumn.propTypes = {
  classes: PropTypes.object,
  linkTitle: PropTypes.string,
};

export default withStyles(styles)(LinksColumn);
