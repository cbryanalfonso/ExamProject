import { StyleSheet } from "react-native";

export const getHeaderStyles = () => StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingVertical: 24,
      paddingHorizontal: 16
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    }
  });