import {Text, View, Image} from 'react-native';
import React from 'react';
import {CardBankProps} from './types';
import {getCardBankStyles} from './styles';
import Card from '../../../../../../components/Card/index';
const CardBank = ({age, description, bankName, url}: CardBankProps) => {
  const styles = getCardBankStyles();
  return (
    <Card>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={styles.containerImage}
          source={{
            uri: url,
          }}
        />
        <View style={styles.containerText}>
          <Text style={styles.txtTitle}>{bankName}</Text>
          <Text style={styles.txtDescription}>{description}</Text>
        </View>
       
      </View>
    </Card>
  );
};

export default CardBank;
