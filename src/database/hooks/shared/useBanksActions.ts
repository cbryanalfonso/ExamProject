import {useDatabaseActions} from '../useDatabaseActions';
import {BanksSchema} from '../../schemas/shared/Banks';
import {DB_SHARED_TABLE_NAMES} from '../../enums';

export const useBanksActions = () => {
  const {addOrUpdateRecord, addOrUpdateRecordsArray, getAllRecords} =
    useDatabaseActions<BanksSchema>(DB_SHARED_TABLE_NAMES.BANKS);

  return {
    addOrUpdateBank: addOrUpdateRecord,
    addOrUpdateBankArray: addOrUpdateRecordsArray,
    getAllBanks: getAllRecords,
  };
};
