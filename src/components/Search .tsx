import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/useRTK';
import { selectUsers } from '../features/usersSlics';
import SearchResultComponent from '../components/SearchResultComponen'



const Search = () => {

  // 以下一旦コードアウト
  
  //   const [searchKeyword, setSearchKeyword] = useState('');
 
  // const users = useAppSelector(selectUsers);
  // console.log("🚀 ~ file: Search .tsx:10 ~ SearchComponent ~ users:", users)

  //   const handleSearchChange = (event:any) => {
  //     setSearchKeyword(event.target.value);
  //   };
  //  const filteredusers = users.value.filter((users:any) =>
  //     users.uid?.toLowerCase().includes(searchKeyword.toLowerCase())
  //   );
 
  //   const handleButtonClick = () => {
  //     console.log('Input Value:', searchKeyword);
  //     // ここで入力値を利用する他の処理を実行する
  //   };
  const Home: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchKeyword(event.target.value);
    };






    return (
      <div>
        {/* <input
        type="text"

        value={searchKeyword}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <button onClick={handleButtonClick}>検索</button>


      <ul>
      
      /  {filteredusers.map((users: any) => (
          <li key={users.uid}>{users.displayName}</li>
        ))}
      </ul> */}

        <h1>Search Example</h1>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <SearchResultComponent searchKeyword={searchKeyword} />
      



      </div>
    );
  };
}
export default Search;