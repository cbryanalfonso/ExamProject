import {StyleSheet} from 'react-native';

export const getSearchStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      borderRadius: 8,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    inputContainer: {
      padding: 8,
      color: '#AAA6B9',
    },
  });
