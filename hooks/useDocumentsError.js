import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useDocumentsError = (error) => {
  useEffect(() => {
    if (error) {
      const { name, code, message } = error;
      toast.error(`${name}: ${code} ${message}`);
    }
  }, [error]);
};

export default useDocumentsError;
