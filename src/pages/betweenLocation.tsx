import Layout from '@/components/Layout';
// import { useLocation } from '../hooks/useLocation';
import Link from 'next/link';
import Router from 'next/router';


const betweenLocation = () => {
  // const { latitude, longitude, location } = useLocation();
  
  // const { latitude: latitude1, longitude: longitude1 } = useLocation();
  // const { latitude: latitude2, longitude: longitude2 } = useLocation();

  // // 中間地点の緯度と経度を計算
  // const middleLatitude = (latitude + latitude2) / 2;
  // const middleLongitude = (longitude + longitude2) / 2;
  

    return (
      <div>
        

      <h1>中間地点計算</h1>
      <div>
        <h2>位置1:</h2>
        {/* <p>緯度: {latitude}</p>
          <p>経度: {longitude}</p>
          <p>経度: {location}</p> */}
      </div>
      {/* <div>
        <h2>位置2:</h2>
        <p>緯度: {latitude2}</p>
        <p>経度: {longitude2}</p>
      </div> */}
      {/* {latitude1 !== 0 && latitude2 !== 0 && (
        <div>
          <h2>中間地点:</h2>
          <p>緯度: {middleLatitude}</p>
          <p>経度: {middleLongitude}</p>
        </div>
        )} */}
         <Link　href="/friendsSarch">戻る</Link>
        

    </div>
  );
};
    
    

  

export default betweenLocation;