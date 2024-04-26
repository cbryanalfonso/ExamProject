import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {HeaderProps} from './types';
import {getHeaderStyles} from './styles';

const HeaderHome = ({title}: HeaderProps) => {
  const styles = getHeaderStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
    </View>
  );
};

export default HeaderHome;
