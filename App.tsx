import {View} from 'react-native';
import React, {FC, useLayoutEffect} from 'react';
import RealmProvider from './src/database/realmContext';
import useSyncData from './src/hooks/useSyncData';
import Navigation from './src/navigation/index';

const AppContent: FC = () => {
  const {downloadData} = useSyncData();
  useLayoutEffect(() => {
    downloadData();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#F9F9F9'}}>
      <Navigation />
    </View>
  );
};

const App = (): JSX.Element => {
  return (
    <RealmProvider>
      <AppContent />
    </RealmProvider>
  );
};

export default App;
