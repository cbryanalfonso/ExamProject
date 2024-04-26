import {
    TextInput, 
    View} from 'react-native';
import React from 'react';
// import {TextInput} from '../../../node_modules/react-native/types/index';
import {getSearchStyles} from './styles';
import {SearchProps} from './types';

const Search = ({placeHolder, _onChangeText}: SearchProps) => {
  const styles = getSearchStyles();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeHolder}
        numberOfLines={2}
        style={styles.inputContainer}
        onChangeText={_onChangeText}
      />
    </View>
  );
};

export default Search;
