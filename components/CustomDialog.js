import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { DialogContent, Dialog } from '@mui/material';

const useStyles = makeStyles(({ STYLES: { center } }) => ({
  content: {
    ...center,
    margin: 0,
    padding: 0,
  },
}));

const CustomDialog = ({ open, setOpenDialog, children }) => {
  const { content } = useStyles();
  return (
    <Dialog
      maxWidth="lg"
      disableBackdropClick={false}
      open={open}
      onClick={() => setOpenDialog(false)}
    >
      <DialogContent className={content}>{children}</DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  setOpenDialog: PropTypes.func,
};

export default CustomDialog;
