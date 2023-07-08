import axios from 'axios';
import { useEffect, useState } from 'react';

export const useLocation = () => {
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [location, setLocation] = useState<string>('');
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    getAddress(latitude, longitude);
  }, [latitude, longitude]);

  const getAddress = async (latitude: number, longitude: number) => {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );

    const address = response.data.address;
    const city = address.city || address.town || address.village || '';
    const state = address.state || '';
    const suburb = address.suburb || '';
    const country = address.country || '';
    const neighbourhood = address.neighbourhood || '';
    const postcode = address.postcode || '';
    setLocation(
      `${postcode} ${country}${state}${city}${suburb}${neighbourhood}`
    );
  };

  return {
    latitude,
    longitude,
    location,
  };
};
