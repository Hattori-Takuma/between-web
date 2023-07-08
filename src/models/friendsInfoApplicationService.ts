import { collection, setDoc, doc, getDoc, getDocs, query, where, } from "firebase/firestore";

import { db } from '../plugins/firebase';


export const friendsInfo = async (uid: string) => {
  await setDoc(doc(db, "friends", uid), {
    uid: ["1", "friends22"],
  });
}

export const getFriends = async (uid: string) => {
  const docRef = doc(db, "friends", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const getAllFriends = async () => {
  let returnUsers: any[] = []
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    returnUsers.push(doc.data())
  })
  return returnUsers
}
// export const frienduid = "追加したいfrienduid"



// export const getFriends3 = async () => {
//   const q = query(collection(db, "users"), where("uid", "==", "x"));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });
// }











