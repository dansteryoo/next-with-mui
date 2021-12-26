import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ReactQuill from 'react-quill';
import './quill.snow.css';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { makeStyles } from '@mui/styles';
import { renderFormHelperText } from 'helpers/forms';
import classnames from 'classnames';

const useStyles = makeStyles(({ STYLES: { fontSize, left, inputRoot } }) => ({
  ...inputRoot,
  labelWrapper: {
    ...left,
    ...fontSize.subtext,
    width: '100%',
    fontWeight: 500,
    height: '2rem',
    margin: '0 0 .5rem 0',
  },
  editorWrapper: {
    width: '100%',
    minHeight: '10rem',
    height: 'auto',
    boxSizing: 'border-box',
    border: '1px solid #dcdcdc',
    '&:hover': { border: '1px solid #000' },
  },
  activeEditor: {
    border: '1px solid #000',
  },
}));

const CustomEditor = ({
  label,
  name,
  control,
  errors,
  watchBody,
  isDisabled,
}) => {
  const { root, labelWrapper, withErrors, editorWrapper, activeEditor } =
    useStyles();
  const errorLabel = label.indexOf(' ') ? label.split(' ')[0] : label;
  const defaultRoot = _.isEmpty(errors) ? root : classnames(withErrors, root);
  const isActive = watchBody?.blocks && watchBody.blocks[0].text !== '';
  const wrapperClass = isActive
    ? classnames(editorWrapper, activeEditor)
    : editorWrapper;
  return (
    <Grid item className={defaultRoot}>
      <div className={labelWrapper}>
        <p>{label}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactQuill
            {...field}
            className={wrapperClass}
            theme="snow"
            readOnly={isDisabled}
          />
        )}
      />
      <ErrorMessage
        name={errorLabel.toLowerCase()}
        errors={errors}
        message={`${label} is required`}
        render={renderFormHelperText}
      />
    </Grid>
  );
};

CustomEditor.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  errors: PropTypes.object,
  watchBody: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default CustomEditor;
