import { doc, setDoc, getFirestore, } from "firebase/firestore";

export const db = getFirestore();

export const friendsInfo = async () => {
  const cityRef = await setDoc(doc(db, "friends"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  })
}