import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textSearchBar}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  textSearchBar: {
    fontSize: 18,
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  iconStyle: {
    fontSize: 28,
    alignSelf: 'center',
    marginHorizontal: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
});

export default SearchBar;
