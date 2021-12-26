import { FormHelperText } from '@mui/material';

export const renderFormHelperText = ({ message }) => {
  return (
    <FormHelperText error style={{ fontSize: '.8rem' }}>
      {message}
    </FormHelperText>
  );
};

export const inputProps = ({ bootstrapRoot, bootstrapInput }) => {
  return {
    classes: {
      root: bootstrapRoot,
      input: bootstrapInput,
    },
  };
};

export const inputLabelProps = ({ bootstrapFormLabel }) => {
  return {
    shrink: true,
    className: bootstrapFormLabel,
  };
};
