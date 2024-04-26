import {View} from 'react-native';
import React from 'react';
import {getCardStyles} from './styles';
import {CardProps} from './types';

const Card = ({children}: CardProps) => {
  const styles = getCardStyles();
  return <View style={styles.container}>{children}</View>;
};

export default Card;
