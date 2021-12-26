import postSchema from 'features/Posts/schema';
import articleSchema from 'features/Resources/Articles/schema';
import { toast } from 'react-toastify';

const validatePost = async ({ doc }) => {
  try {
    if (doc) {
      const isValid = await postSchema.isValid(doc);
      if (isValid) return doc;
    }
  } catch (err) {
    console.log({ data: doc, err });
    return toast.error(`Error in validatePost`);
  }
};

const validateManyDocuments = async ({ docs }) => {
  try {
    const data = docs.docs.map(async (doc) => {
      const docData = await doc.data();
      const isValid = await articleSchema.isValid(docData);
      return isValid ? docData : null;
    });
    const array = await Promise.all(data);
    return array.filter((each) => !!each);
  } catch (err) {
    console.log({ err });
    return toast.error(`Error in validatePost`);
  }
};

export { validateManyDocuments, validatePost };
