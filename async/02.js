// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve({ userName: "Elon", role: "Ruler of the universe" });
    } else {
      reject({ statusCode: 404, message: "Not found", request: "PROMISE 1" });
    }
  }, 2000);
});

const myPromise2 = new Promise((resolve, reject) => {
  // Perform some asynchronous operation
  const success = false;
  setTimeout(() => {
    if (success) {
      resolve({ address: "X street" });
    } else {
      reject({ statusCode: 404, message: "Not found", request: "PROMISE 2" });
    }
  }, 1000);
});

let user;

/* myPromise
  .then((response) => {
    console.log("We have a response with this user: ", response);
    user = response;

    return myPromise2
  })
  .then((response) => {
    console.log(response);

    user = { ...user, ...response };

    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });
 */

Promise.all([myPromise, myPromise2])
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
