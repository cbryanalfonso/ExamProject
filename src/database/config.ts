import Realm from 'realm';
import sharedSchemas from './schemas/shared/index';

export const realmConfig: Realm.Configuration = {
    schema: [
        ...sharedSchemas
    ],
    deleteRealmIfMigrationNeeded: __DEV__,
    schemaVersion: 1
}