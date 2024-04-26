import Realm from 'realm';
import {SchemasType} from '../types';
import {RealmContext} from '../realmContext';
import {SYNC_STATUS, DatabaseActions} from '../enums';
import {RealmDatabaseActionEvent} from '../../store/shared/interfaces';

export type SyncObject<T> = T & {
  _syncStatus?: SYNC_STATUS;
  _lastUpdatedDate?: string;
  _deleted?: string;
};

type AddOrUpdateRecordConfig = {
  triggerRealmDatabaseEvent?: boolean;
  forceSyncStatusToSyncedInModificationAction?: boolean;
};

export const useDatabaseActions = <T>(schema: SchemasType) => {
  const {useRealm} = RealmContext;
  const realm = useRealm();
  const objects = realm.objects<SyncObject<T>>(schema);
//   const {setRealmDatabaseListener} = useSharedActions();
  const getFormattedRecordWithAction = (
    record: SyncObject<T>,
    forceSyncStatusToSyncedInModificationAction?: boolean,
  ) => {
    let _record = {...record};
    const primaryKey = objects[0]?.objectSchema()?.primaryKey || '';
    let action: RealmDatabaseActionEvent = DatabaseActions.INSERTION;
    if (primaryKey) {
      const existingRecord = getRecordById(
        record[primaryKey as keyof typeof record],
      );
      if (existingRecord) {
        const modificationSyncStatus =
          forceSyncStatusToSyncedInModificationAction
            ? SYNC_STATUS.SYNCED
            : SYNC_STATUS.UNSYNCED;
        _record = {
          ...existingRecord,
          ...record,
          /**
           * Updates by default the _syncStatus to unsynced and the _lastUpdatedDate to a more recent date.
           */ _syncStatus: modificationSyncStatus,
          _lastUpdatedDate: new Date().toISOString(),
        };
        action = DatabaseActions.MODIFICATION;
      }
    }
    return {
      record: _record,
      action,
    };
  };
  const addOrUpdateRecord = (
    record: SyncObject<T>,
    config: AddOrUpdateRecordConfig = {},
  ) => {
    const {
    //   triggerRealmDatabaseEvent = true,
      forceSyncStatusToSyncedInModificationAction,
    } = config;
    const {record: _record, action} = getFormattedRecordWithAction(
      record,
      forceSyncStatusToSyncedInModificationAction,
    );
    const _lastUpdatedDateTemp = new Date().toISOString();
    realm.write(() => {
      realm.create(
        schema,
        {
          ..._record, // Sets the _syncStatus flag to unsynced if the record to add has the _syncStatus as undefined.
          _syncStatus: _record._syncStatus ?? SYNC_STATUS.UNSYNCED, // Sets the _lastUpdatedDate flag with a date if the record to add has the _lastUpdatedDate as undefined.
          _lastUpdatedDate: _record._lastUpdatedDate ?? _lastUpdatedDateTemp,
        },
        Realm.UpdateMode.Modified,
      );
    });
    // if (triggerRealmDatabaseEvent) {
    //   setRealmDatabaseListener({
    //     schemaName: schema,
    //     updatedObjects: objects.toJSON(),
    //     action,
    //   });
    // }
  };
  const addOrUpdateRecordsArray = (
    records: SyncObject<T>[],
    config: AddOrUpdateRecordConfig = {},
  ) => {
    const _lastUpdatedDateTemp = new Date().toISOString();
    const {
      triggerRealmDatabaseEvent,
      forceSyncStatusToSyncedInModificationAction,
    } = config;
    realm.write(() => {
      records.forEach((record, index) => {
        /**
         * Defines that the realmDatabaseEvent should be triggered when all the
         * records have been inserted or modified.
         */
        const shouldTriggerDatabaseEvent =
          triggerRealmDatabaseEvent ?? records.length - 1 === index;
        const {record: _record, action} = getFormattedRecordWithAction(
          record,
          forceSyncStatusToSyncedInModificationAction,
        );
        realm.create(
          schema,
          {
            ..._record, // Sets the _syncStatus flag to unsynced if the record to add has the _syncStatus as undefined.
            _syncStatus: record._syncStatus ?? SYNC_STATUS.UNSYNCED, // Sets the _lastUpdatedDate flag with a date if the record to add has the _lastUpdatedDate as undefined.
            _lastUpdatedDate: record._lastUpdatedDate ?? _lastUpdatedDateTemp,
          },
          Realm.UpdateMode.Modified,
        );
        // if (shouldTriggerDatabaseEvent) {
        //   setRealmDatabaseListener({
        //     schemaName: schema,
        //     updatedObjects: objects.toJSON(),
        //     action,
        //   });
        // }
      });
    });
  };
  const getRecordById = (id: any) => {
    return realm.objectForPrimaryKey<SyncObject<T>>(schema, id);
  };
  const getAllRecords = () => {
    return objects;
  };
  const getRecordsByFilter = (query: string) => {
    return objects.filtered(query);
  };
  const deleteAllRecords = () => {
    realm.write(() => {
      realm.delete(objects);
    });
    // setRealmDatabaseListener({
    //   schemaName: schema,
    //   updatedObjects: objects.toJSON(),
    //   action: DatabaseActions.DELETION,
    // });
  };
  const deleteRecordsByFilter = (query: string) => {
    realm.write(() => {
      realm.delete(objects.filtered(query));
    });
    // setRealmDatabaseListener({
    //   schemaName: schema,
    //   updatedObjects: objects.toJSON(),
    //   action: DatabaseActions.DELETION,
    // });
  };
  const deleteRecordById = (id: number | string) => {
    realm.write(() => {
      const record = getRecordById(id);
      if (record) realm.delete(record);
    });
  };
  return {
    addOrUpdateRecord,
    addOrUpdateRecordsArray,
    getRecordById,
    getAllRecords,
    getRecordsByFilter,
    deleteAllRecords,
    deleteRecordsByFilter,
    deleteRecordById,
  };
};
