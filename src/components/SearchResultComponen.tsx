import { selectUser } from '../features/useSlics';
import { selectUsers } from '../features/usersSlics';
import { useAppSelector } from '../hooks/useRTK';
import { registerFriends } from '../models/friendsInfoApplicationService'
import { collection,  addDoc } from "firebase/firestore";
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
  


  const registerFriends = async (uid: string) => {
  await addDoc(collection(db, "friends", uid), {
    uid: ["追加したい友達のuid"],
  });
}

  return (
    <div>
      <h2>Search Results</h2>
  {/* <button onClick={registerFriends}>[追加ボタン]</button> */}

      <ul>
        {matchedUsers.map((users) => (
          <li key={users.uid}>・{users.name}  </li>
        ))}
      </ul>
    </div>
  );
};


export default SearchResultComponent;
