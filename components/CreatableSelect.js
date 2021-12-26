import React, { useState, useEffect } from 'react';
import Creatable from 'react-select/creatable';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@mui/styles';
import { colors } from 'app/theme';
import useStore from 'hooks/useStore';

const useStyles = makeStyles(
  ({ STYLES: { fontSize, left, inputRoot }, transitions }) => ({
    ...inputRoot,
    labelWrapper: {
      ...left,
      ...fontSize.subtext,
      width: '100%',
      fontWeight: 500,
      height: '2rem',
      margin: '0 0 .5rem 0',
    },
    selectInput: {
      ...fontSize.subtext,
      width: '100%',
      transition: transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
      },
    },
  })
);

const CreatableSelect = ({ label, name, control, isDisabled }) => {
  const { root, labelWrapper, selectInput } = useStyles();
  const store = useStore();
  const [categoryOptions, setCategoryOptions] = useState([]);
  useEffect(() => {
    if (store.categories.length) {
      setCategoryOptions(store.categories);
    }
  }, [store.categories]);
  return (
    <Grid item className={root}>
      <div className={labelWrapper}>
        <p>{label}</p>
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Creatable
            {...field}
            isMulti
            styles={{
              control: (prev) => ({
                ...prev,
                minHeight: 47,
                '&:hover': {
                  borderColor: '#000',
                },
              }),
            }}
            isDisabled={isDisabled}
            options={categoryOptions}
            className={selectInput}
            theme={(theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                primary: colors.common.black,
                primary50: '#f4f4f4',
                primary25: colors.secondary.complimentLight,
                danger: colors.secondary.main,
              },
            })}
          />
        )}
      />
    </Grid>
  );
};

CreatableSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any,
  errors: PropTypes.object,
  isDisabled: PropTypes.bool,
};

export default CreatableSelect;
