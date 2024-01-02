import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HeaderIcon = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBox}>
        <Ionicons name="arrow-back" size={25} style={styles.icon}></Ionicons>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconBox}>
        <MaterialIcons
          name="gps-fixed"
          size={25}
          style={styles.icon}></MaterialIcons>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    marginVertical: 40,
    paddingHorizontal: 20,
  },
  icon: {
    color: 'black',
  },
  iconBox: {
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 25,
    elevation: 10,
  },
});

export default HeaderIcon;
