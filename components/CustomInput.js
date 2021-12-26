import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import { FormHelperText } from '@mui/material';

const useStyles = makeStyles(
  ({
    STYLES: { fontSize, left, inputRoot },
    spacing,
    transitions,
    palette: { common, secondary },
    button: {
      boxShadow: { inputs },
    },
  }) => ({
    ...inputRoot,
    bootstrapRoot: {
      padding: 0,
      'label + &': {
        marginTop: spacing(2),
      },
    },
    bootstrapInput: {
      ...fontSize.subtext,
      borderRadius: 4,
      backgroundColor: common.white,
      border: `1px solid ${secondary.lightGray}`,
      padding: '.7rem',
      width: '100%',
      transition: transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        boxShadow: inputs.gray,
      },
    },
    bootstrapFormLabel: {
      ...fontSize.subtext,
    },
    labelWrapper: {
      ...left,
      ...fontSize.subtext,
      width: '100%',
      fontWeight: 500,
      height: '2rem',
      margin: '0 0 .5rem 0',
    },
    labelDisabled: {
      color: secondary.gray,
    },
  })
);

const CustomInput = ({ label, name, control, errors, isDisabled }) => {
  const {
    root,
    bootstrapRoot,
    bootstrapInput,
    bootstrapFormLabel,
    labelWrapper,
    labelDisabled,
    withErrors,
  } = useStyles();
  const errorLabel = label.indexOf(' ') ? label.split(' ')[0] : label;
  const defaultRoot = _.isEmpty(errors) ? root : classnames(withErrors, root);
  return (
    <Grid item className={defaultRoot}>
      <div
        className={
          isDisabled ? classnames(labelWrapper, labelDisabled) : labelWrapper
        }
      >
        <p>{label}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            placeholder={label}
            InputProps={{
              classes: {
                root: bootstrapRoot,
                input: bootstrapInput,
              },
            }}
            InputLabelProps={{
              shrink: true,
              className: bootstrapFormLabel,
            }}
            disabled={isDisabled}
          />
        )}
      />
      <ErrorMessage
        name={errorLabel.toLowerCase()}
        errors={errors}
        message={`${label} is required`}
        render={({ message }) => {
          return (
            <FormHelperText error style={{ fontSize: '.8rem' }}>
              {message}
            </FormHelperText>
          );
        }}
      />
    </Grid>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  errors: PropTypes.object,
  isDisabled: PropTypes.bool,
};

export default CustomInput;
