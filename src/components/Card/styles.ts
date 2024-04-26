import {StyleSheet} from 'react-native';
export const getCardStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      padding: 16,
      borderRadius: 8,
      width: '100%',
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 1,
    },
  });
