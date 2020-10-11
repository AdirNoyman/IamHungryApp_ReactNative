import React from 'react';
import { View, TextInput, StyleSheet, Input } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name='search' size={24} color='black' align='center' />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#DEDEDE',
    height: 50,
    borderRadius: 5,
    margin: 15,
    padding: 10,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default SearchBar;
