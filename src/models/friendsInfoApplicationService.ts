import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';

import { db } from '../plugins/firebase';

export const friendsInfo = async (uid: string) => {
  await setDoc(doc(db, 'friends', uid), {
    uid: ['1', 'friends22'],
  });
};

export const getFriends = async (uid: string) => {
  const docRef = doc(db, 'friends', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
  }
};

export const getAllFriends = async () => {
  let returnUsers: any[] = [];
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach((doc) => {
    returnUsers.push(doc.data());
  });
  return returnUsers;
};
// export const frienduid = "追加したいfrienduid"

export const getMyFriends = async (uid: string) => {
  const returnArr: string[] = [];
  const q = query(collection(db, 'friends'));
  const querySnapshot = await getDocs(q);
  await querySnapshot.forEach((doc) => {
    if (doc.id === uid) {
      doc.data().uid.forEach((friend: string) => {
        returnArr.push(friend);
      });
    }
  });
  return returnArr;
};

export const getUserInfoByUid = async (uids: string[]) => {
  const usersInfo: any[] = [];
  const q = query(collection(db, 'users'));
  const querySnapshot = await getDocs(q);
  await querySnapshot.forEach((doc) => {
    uids.forEach((uid) => {
      if (doc.id === uid) {
        usersInfo.push(doc.data());
      }
    });
  });
  return usersInfo;
};
