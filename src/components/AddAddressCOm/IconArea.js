import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// <Ionicons name='home-outline'></Ionicons>
// <Ionicons name='bag-handle-outline'></Ionicons>
// <AntDesign name='plus'></AntDesign>

const IconArea = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Label As</Text>

      <View style={styles.iconBox}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons
            name="home-outline"
            size={20}
            style={styles.icon}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons
            name="bag-handle-outline"
            size={20}
            style={styles.icon}></Ionicons>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="plus" size={20} style={styles.icon}></AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: '10%',
  },
  iconButton: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    elevation: 4,
    marginVertical: 10,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },

  iconBox: {
    flexDirection: 'row',
    width: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    color: 'black',
  },
});

export default IconArea;
