import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const InputArea = ({title, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor="grey"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'grey',
    height: 35,
    paddingHorizontal: 15,
    paddingVertical: 2,
    fontSize: 13,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default InputArea;
