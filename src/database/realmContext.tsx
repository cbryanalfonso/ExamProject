import {createRealmContext} from '@realm/react';
import {FC, PropsWithChildren} from 'react';
import Realm from 'realm';
import {realmConfig} from './config';

export const RealmContext = createRealmContext(realmConfig);

export const {useRealm, RealmProvider: Provider} = RealmContext;

const RealmProvider: FC<PropsWithChildren> = ({children}) => {
  Realm.copyBundledRealmFiles();

  return <Provider>{children}</Provider>;
};

export default RealmProvider;
