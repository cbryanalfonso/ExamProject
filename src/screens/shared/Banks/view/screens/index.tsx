import { View, FlatList} from 'react-native';
import React from 'react';
import useBanks from '../../hooks/useBanks';
import CardBank from '../components/CardBank/index';
import {getBankStyles} from './styles';
import Search from '../../../../../components/Search/index';

const BanksScreen = () => {
  const {setBankData, bankInformation} = useBanks();
  const styles = getBankStyles();

  return (
    <View style={styles.container}>
      <Search placeHolder="Buscar Banco" _onChangeText={setBankData} />
      <FlatList
        data={bankInformation}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CardBank
            {...item}
            bankName={item.bankName}
            url={item.url}
            description={item.description}
          />
        )}
      />
    </View>
  );
};

export default BanksScreen;
