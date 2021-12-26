import React from 'react';
import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { logInWithOauth } from 'features/Auth/authContext';
import { makeStyles } from '@mui/styles';
import SocialButton from 'components/SocialButton';
import googleSVG from 'static/google_signin.svg';
import facebookSVG from 'static/facebook_signin.svg';

const useStyles = makeStyles(
  ({
    palette: { social },
    button: { boxShadow, format },
    STYLES: { column, center },
  }) => ({
    container: {
      ...center,
      ...column,
    },
    googleButton: {
      backgroundColor: social.google,
      boxShadow: boxShadow.social.google,
      ...format.social,
      '&:hover': {
        opacity: '80%',
        backgroundColor: social.google,
      },
    },
    facebookButton: {
      backgroundColor: social.facebook,
      boxShadow: boxShadow.social.facebook,
      ...format.social,
      '&:hover': {
        opacity: '80%',
        backgroundColor: social.facebook,
      },
    },
  })
);

const SignIn = () => {
  const { container, googleButton, facebookButton } = useStyles();

  return (
    <div className={container}>
      <SocialButton
        icon={googleSVG}
        klassname={googleButton}
        text="Log in with Google"
        handleClick={() =>
          logInWithOauth({
            oAuthProvider: GoogleAuthProvider,
          })
        }
      />
      <SocialButton
        icon={facebookSVG}
        klassname={facebookButton}
        text="Log in with Facebook"
        handleClick={() =>
          logInWithOauth({
            oAuthProvider: FacebookAuthProvider,
          })
        }
      />
    </div>
  );
};

export default SignIn;

// const handleSubmit = () => {
//   if (password.length < 8) {
//     return toast.error('Password must be at least 8 characters');
//   }

//   if (isLogin) {
//     handleAuth(() => login(email, password));
//   } else {
//     handleAuth(() => signup(email, password));
//   }
// };

// <SocialButton klassname={} onClick={() => setIsLogin(!isLogin)}>
//   {isLogin ? 'Log In' : 'Sign up'}
// </SocialButton>
// <br />
// <br />
// <input
//   type="email"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
// <input
//   type="password"
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
// />
// <SocialButton onClick={handleSubmit}>
//   {isLogin ? 'Log In' : 'Sign up'}
// </SocialButton>
// <br />
// <br />
