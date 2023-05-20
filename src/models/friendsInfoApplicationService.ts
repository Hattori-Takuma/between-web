import { addDoc, collection, getFirestore, setDoc, doc } from "firebase/firestore";


export const db = getFirestore();


export const friendsInfo = async (uid: string) => {
  await setDoc(doc(db, "friends", uid), {
    uid: ["friends1", "fri2"],
  });
}


