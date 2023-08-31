import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '../plugins/firebase';

export const googleLogin = async () => {
  return new Promise(function (resolve, reject) {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const user = result.user;
        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = async () => {
  await signOut(auth)
    .then(() => {
      console.log('successful');
    })
    .catch((error) => {
      console.log('error');
    });
};
