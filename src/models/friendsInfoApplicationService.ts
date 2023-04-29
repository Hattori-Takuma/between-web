import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

export const db = getFirestore();



export const friendsInfo = async () => {
  const docRef = await addDoc(collection(db, "friends"), {
    friends: "uid",
  });
  console.log(" friends ", docRef.id);
}
