import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(({ STYLES: { center } }) => ({
  passwordWrapper: {
    ...center,
    width: '100%',
  },
}));

const PasswordInput = ({ handleSubmit, password, setPassword }) => {
  const { passwordWrapper } = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={passwordWrapper}>
      <FormControl sx={{ width: '25rem' }} variant="outlined">
        <InputLabel style={{ fontSize: '1.25rem' }} htmlFor="password-input">
          Password
        </InputLabel>
        <OutlinedInput
          id="password-input"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ fontSize: '1.25rem' }}
          onKeyDown={handleSubmit}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  );
};

PasswordInput.propTypes = {
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
};

export default PasswordInput;
