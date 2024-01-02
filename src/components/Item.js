import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Item = ({item,props}) => {
  return (
    <View style={itemstyle.container}>
      <Image source={item.image} style={itemstyle.image}></Image>

      <View style={itemstyle.itembox}>
        <Text
          numberOfLines={2}
          ellipsizeMode="tail"
          style={{textAlign: 'center', fontWeight: 700, color: 'black'}}>
          {item.title}
        </Text>
        <Text style={{textAlign: 'center', color: '#e61216', fontWeight: 900}}>
          Rs.{item.price}
        </Text>
        <TouchableOpacity style={itemstyle.button}>
          <Text style={{textAlign: 'center', color: 'black', fontWeight: 800}}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const itemstyle = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'white',
    height: 250,
    borderRadius: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 6,
    padding: 7,
    width: '0%',
  },
  image: {
    height: '60%',
    width: 120,
    resizeMode: 'cover',
    bottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#e61216',
    width: 130,
    borderRadius: 15,

    marginBottom: 10,
    padding: 3,
  },
  itembox: {
    alignItems: 'center',
  },
});

export default Item;
