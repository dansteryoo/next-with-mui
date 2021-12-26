import { toast } from 'react-toastify';

export const toastFirebaseError = ({ err }) => {
  const { name, code, message } = err;
  toast.error(`${name}: ${code} ${message}`);
};
