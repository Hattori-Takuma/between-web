import { addDoc, collection, getFirestore, serverTimestamp } from "firebase/firestore";

export const db = getFirestore();

export const userInfo = async (user: any) => {
  const docRef = await addDoc(collection(db, "users"), {
    name: user.displayName,
    uid: user.uid,
    address: "test"
  });
  console.log("Document written with ID: ", docRef.id);
}