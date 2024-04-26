import axios from 'axios';
export const fetchBanksService = async () => {
  return (
    await axios.get<any[]>('https://dev.obtenmas.com/catom/api/challenge/banks')
  ).data;
};
