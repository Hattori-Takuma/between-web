import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/useRTK';
import { selectUsers } from '../features/usersSlics';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
 
const users = useAppSelector(selectUsers);
console.log("🚀 ~ file: Search .tsx:10 ~ SearchComponent ~ users:", users)

  const handleSearchChange = (event:any) => {
    setSearchKeyword(event.target.value);
  };
 const filteredusers = users.value.filter((users:any) =>
    users.text?.toLowerCase().includes(searchKeyword.toLowerCase())
  );
 
  const handleButtonClick = () => {
    console.log('Input Value:', searchKeyword);
    // ここで入力値を利用する他の処理を実行する
   {filteredusers}
  };



  return (
    <div>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <button onClick={handleButtonClick}>検索</button>


      <ul>
      
      /  {filteredusers.map((users: any) => (
          <li key={users.id}>{users.displayName}</li>
        ))}
      </ul>
      



    </div>
  );
};

export default Search;