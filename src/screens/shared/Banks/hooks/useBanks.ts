import {useMemo, useState} from 'react';
import {useBanksActions} from '../../../../database/hooks/shared/useBanksActions';
import {BanksType} from '../../../../models/shared/Banks';
import {fetchBanksService} from '../data/banksAPIService';
const useBanks = () => {
  const {addOrUpdateBankArray, getAllBanks} = useBanksActions();
  const [bankData, setBankData] = useState('');

  const getAllBanksData: BanksType[] = getAllBanks();

  const bankInformation: BanksType[] = useMemo(() => {
    if (bankData.length >= 3) {
      const filterBanks = getAllBanksData.filter(bank =>
        bank?.bankName?.toUpperCase()?.includes(bankData?.toUpperCase()),
      );
      return filterBanks;
    }
    return getAllBanksData;
  }, [bankData, getAllBanksData]);

  const getBanksService = async () => {
    try {
      const response = await fetchBanksService();
      if (response) {
        addOrUpdateBankArray(response);
      }
    } catch (error) {
      __DEV__ && console.log('Error', error);
    }
  };
  return {getBanksService, bankInformation, setBankData};
};

export default useBanks;
