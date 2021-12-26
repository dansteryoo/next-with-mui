import { useEffect, useContext, useState } from 'react';
import { PostsContext, initialStore } from 'App';

export const useStore = () => {
  const context = useContext(PostsContext);
  const [store, setStore] = useState(initialStore);

  useEffect(() => {
    if (context) {
      setStore(context);
    }
  }, [context]);
  return store;
};

export default useStore;
