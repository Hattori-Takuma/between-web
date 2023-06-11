import { doc, getFirestore, setDoc } from 'firebase/firestore';

export const db = getFirestore();

export const userInfo = async (user: any) => {
  await setDoc(doc(db, 'users', user.uid), {
    name: user.displayName,
    uid: user.uid,
    address: 'test',
  });
};
