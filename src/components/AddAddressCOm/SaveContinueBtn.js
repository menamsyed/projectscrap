import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const SaveContinueBtn = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.title}>Save and Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '90%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default SaveContinueBtn;
