export default function retryLazyLoading(
  importComponentFunction,
  retriesLeft = 5,
  interval = 1000
) {
  return new Promise((resolve, reject) => {
    importComponentFunction()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retryLazyLoading(
            importComponentFunction,
            retriesLeft - 1,
            interval
          ).then(resolve, reject);
        }, interval);
      });
  });
}
