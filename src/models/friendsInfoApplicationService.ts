import { addDoc, collection, getFirestore, setDoc, doc } from "firebase/firestore";

export const db = getFirestore();



// export const friendsInfo = async () => {
//   const docRef = await addDoc(collection(db, "friends"), {
//     friends: "uid",
//   });
//   console.log(" friends ", docRef.id);
// }


// export const userInfo = async (user: any) => {
//   const docRef = await addDoc(collection(db, "users"), {
//     name: user.displayName,
//     uid: user.uid,
//     address: "test"
//   });
//   console.log("Document written with ID: ", docRef.id);
// }


export const friendsInfo = async (user: any) => {
  await setDoc(doc(db, "friends", user.id), {
    uid: ["qwertyuiop", "asdfgghjkll;:"],
  });
}