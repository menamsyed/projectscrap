import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({name}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.txt}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 48,
    borderRadius: 10,
    marginTop: 30,
  },
  txt: {
    color: 'white',
    fontSize: 15,
  },
});

export default Button;
