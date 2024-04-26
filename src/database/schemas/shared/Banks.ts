import {ObjectSchema} from 'realm';
import {BanksType} from '../../../models/shared/Banks';
import {DB_SHARED_TABLE_NAMES} from '../../enums';

export enum BanksEnumSchemaKey {
  BANK_NAME = 'bankName',
  DESCRIPTION = 'description',
  AGE = 'age',
  URL = 'url',
}

export class BanksSchema extends Realm.Object<BanksType> {
  [BanksEnumSchemaKey.BANK_NAME]!: string;
  [BanksEnumSchemaKey.DESCRIPTION]!: string;
  [BanksEnumSchemaKey.AGE]!: number;
  [BanksEnumSchemaKey.URL]!: string;

  static schema: ObjectSchema = {
    name: DB_SHARED_TABLE_NAMES.BANKS,
    properties: {
      [BanksEnumSchemaKey.BANK_NAME]: 'string',
      [BanksEnumSchemaKey.AGE]: 'int?',
      [BanksEnumSchemaKey.DESCRIPTION]: 'mixed?',
      [BanksEnumSchemaKey.URL]: 'mixed?',
    },
    primaryKey: BanksEnumSchemaKey.BANK_NAME,
  };
}
