import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SelectButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Select</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '8%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  title:{
    color:'white',
    fontSize:16,
    fontWeight:'500'

  }
});

export default SelectButton;
