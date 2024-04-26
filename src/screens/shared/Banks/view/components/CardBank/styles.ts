import {StyleSheet} from 'react-native';

export const getCardBankStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 16,
    },
    containerImage: {
      width: '10%',
      heigh: 'auto',
    },
    containerText: {
      width: '70%',
    },
    txtTitle: {
      color: '#232D3A',
      fontWeight: '600',
    },
    txtDescription: {
      color: '#524B6B',
    },
  });
