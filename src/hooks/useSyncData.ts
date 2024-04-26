import useBanks from '../screens/shared/Banks/hooks/useBanks';

const useSyncData = () => {
  const {getBanksService} = useBanks();

  const downloadData = async () => {
    try {
      await getBanksService();
    } catch (error) {
      __DEV__ && console.log('There was an error');
    }
  };
  return {
      downloadData
  };
};

export default useSyncData;
