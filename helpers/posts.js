import {
  doc as firebaseDoc,
  setDoc,
  collection,
  Timestamp,
  firestore,
  deleteDoc,
  updateDoc,
} from 'app/firebase';
import { toast } from 'react-toastify';
import { createArticlePath } from 'helpers/methods';
import { toastFirebaseError } from 'helpers/errors';
import { validatePost } from 'helpers/validations';

const createArticle = async ({ doc }) => {
  try {
    if (doc) {
      const ref = firebaseDoc(collection(firestore, 'articles'));
      if (ref.id) {
        const path = createArticlePath({ title: doc.title });
        const data = {
          ...doc,
          uid: ref.id,
          path,
          createdAt: Timestamp.fromDate(new Date()),
          updatedAt: Timestamp.fromDate(new Date()),
        };
        await validatePost({ doc });
        await setDoc(ref, data);
        toast.success(`${data.title} was created.`);
        return data;
      }
    }
    return null;
  } catch (err) {
    toastFirebaseError({ err });
  }
};

const updateArticle = async ({ doc }) => {
  try {
    if (doc) {
      const ref = firebaseDoc(firestore, 'articles', doc.uid);
      const path = createArticlePath({ title: doc.title });
      const data = {
        ...doc,
        path,
        updatedAt: Timestamp.fromDate(new Date()),
      };
      await validatePost({ doc });
      await updateDoc(ref, data);
      toast.success(`${data.title} was updated.`);
      return true;
    }
    return null;
  } catch (err) {
    toastFirebaseError({ err });
  }
};

const deleteArticle = async ({ articleId, title }) => {
  if (typeof articleId === 'string') {
    try {
      await deleteDoc(firebaseDoc(firestore, 'articles', articleId));
      toast.success(`${title} was deleted.`);
      return true;
    } catch (err) {
      toastFirebaseError({ err });
    }
  }
  return false;
};

export { createArticle, deleteArticle, updateArticle };
