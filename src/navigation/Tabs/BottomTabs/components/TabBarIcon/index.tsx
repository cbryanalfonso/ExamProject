import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {getTabBarIconStyles} from './styles';

const TabBarIcon = () => {
  const styles = getTabBarIconStyles();
  return (
    <View>
      <Image source={require('./home.png')} style={styles.container} resizeMode="contain" />
    </View>
  );
};

export default TabBarIcon;
