import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Searchbar = ({onSearch}) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (query) => {
//     console.log(query)
//     setSearchQuery(query);
//     onSearch(query); // Call the onSearch callback with the search query
//   };

  return (
    <View style={searchbarstyle.container}>
      <TextInput
        style={searchbarstyle.searchbox}
        placeholder={'Search here'}
        textAlignVertical="center"
        onChangeText={onSearch}
        ></TextInput>
    </View>
  );
};

const searchbarstyle = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
     
  },
  searchbox: {
    borderWidth: 0.5,
    margin: 1,
    fontSize: 12,
    borderRadius: 8,
    height: 40,
    width: '95%',
    backgroundColor: '#c0c4c1',
    paddingHorizontal: 15,
    color:'black'
     
  },
});

export default Searchbar;
