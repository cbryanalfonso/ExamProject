import React from 'react';
import BottomTabs from './Tabs/BottomTabs/index';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};

export default Navigation;
