import { addDoc, collection, getFirestore, setDoc, doc, getDoc, query, getDocs } from "firebase/firestore";


export const db = getFirestore();


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

export const getFriends2 = async () => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  })
}
// export const frienduid = "追加したいfrienduid"



// export const getFriends = async (uid: string, frienduid: string) => {
//   const docRef = doc(db, "friends", uid);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data().uid.includes(frienduid));
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };






