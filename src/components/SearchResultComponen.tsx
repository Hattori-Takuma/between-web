import { selectUser } from '../features/useSlics';
import { selectUsers } from '../features/usersSlics';
import { useAppSelector } from '../hooks/useRTK';

import { collection,  addDoc,setDoc ,doc} from "firebase/firestore";
import { db } from '../plugins/firebase';

const SearchResultComponent: React.FC<{ searchKeyword: string }> = ({
  searchKeyword,
}) => {
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);
  console.log('🚀 ~ file: Search .tsx:10 ~ SearchComponent ~ users:', users);

  const matchedUsers = users.value.filter((users) =>
    users.uid.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  console.log(matchedUsers);
  


  const registerFriends = async () => {
  await setDoc(doc(db, "friends",user.uid), {
    test: matchedUsers
  });
  }
  

// const friendsInfo = async () => {
//   await setDoc(doc(db, 'friends', user.uid), {
//     uid: ['8VxBTv75gcM0xjUWrly0Y0EgDKG3'],
//   });
// };

  return (
    <div>
      <h2>Search Results</h2>
  

      <ul>
        {matchedUsers.map((users, index) => (
          <div key={index} className="flex">
            <li key={users.uid}>・{users.name} <button onClick={registerFriends}>[追加ボタン]</button></li>
          </div>
        ))}
      </ul>
    </div>
  );
};


export default SearchResultComponent;
