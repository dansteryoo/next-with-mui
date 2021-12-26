import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    minWidth: '150px',
  },
}));

const CustomCheckbox = ({ label, name, control, isDisabled }) => {
  const { root } = useStyles();
  return (
    <>
      <Grid item className={root}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              disabled={isDisabled}
              checked={field.value}
              value={String(field.value)}
              color="secondary"
            />
          )}
        />
        <Typography align="left" variant="body1">
          <p style={{ color: isDisabled ? '#939393' : '#000' }}>{label}</p>
        </Typography>
      </Grid>
    </>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  isDisabled: PropTypes.bool,
};

export default CustomCheckbox;
