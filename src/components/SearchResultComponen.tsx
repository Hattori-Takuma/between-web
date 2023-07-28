import { useAppSelector } from '../hooks/useRTK';
import { selectUsers } from '../features/usersSlics';
import { selectUser } from '../features/useSlics';

 const SearchResultComponent: React.FC<{ searchKeyword: string }> = ({ searchKeyword }) => {
  const user = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);
console.log("🚀 ~ file: Search .tsx:10 ~ SearchComponent ~ users:", users)

  const matchedUsers = users.value.filter((users) =>
    users.uid.toLowerCase().includes(searchKeyword.toLowerCase())
  );
   console.log(matchedUsers)

   
   
   return (
    
     
     
     <div>
       

     
      <h2>Search Results</h2>
 
      <ul>
        {matchedUsers.map((users) => (
          <li key={users.uid}>・{users.displayName}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResultComponent;