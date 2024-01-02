/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import  React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';

import Header from './src/components/Header';
import Navbar from './src/components/Navbar';
import Item from './src/components/Item';

import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';

const App = () => {
  //

  const DATA = [
    {
      id: '1',
      title: 'Hazelnut Signature Latte',
      price: '250',
      image: require('../awesomeproject/src/images/hazelnutlatte.webp'),
    },
    {
      id: '2',
      title: 'Cookies & Cream Hot Chocolate',
      price: '450',
      image: require('../awesomeproject/src/images/hot-chocolate.webp'),
    },
    {
      id: '3',
      title: 'Moccaaccino Signature Latte',
      price: '290',
      image: require('../awesomeproject/src/images/moccaccino.webp'),
    },
    {
      id: '4',
      title: 'White Mocca Signature Latte',
      price: '499',
      image: require('../awesomeproject/src/images/whitemocca.webp'),
    },
    {
      id: '5',
      title: 'Green Tea Latte',
      price: '600',
      image: require('../awesomeproject/src/images/greentea-latte.webp'),
    },
    {
      id: '6',
      title: 'London Fog',
      price: '200',
      image: require('../awesomeproject/src/images/london-fog.webp'),
    },
    {
      id: '7',
      title: 'Con Panna Latte',
      price: '250',
      image: require('../awesomeproject/src/images/con-panna.webp'),
    },
    {
      id: '8',
      title: 'Milk Tea Latte',
      price: '60',
      image: require('../awesomeproject/src/images/chai-latte.webp'),
    },
    {
      id: '8',
      title: 'Milk Tea Latte',
      price: '60',
      image: require('../awesomeproject/src/images/chai-latte.webp'),
    },
  
  ];
  //searchbar Implementation...

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const updateFilteredData = (query) => {
    const filteredItems = DATA.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredData(filteredItems);
    setSearchQuery(query);
  };

  return (
     <NavigationContainer>

          <SafeAreaView style={homestyle.container}>

          <Header onSearch={updateFilteredData} />

          <View style={homestyle.body}>
            <FlatList
              data={searchQuery ? filteredData : DATA}
              keyExtractor={item => item.id}
              renderItem={({item}) => <Item item={item} />}
              numColumns={2}>
            </FlatList>
          </View>

          <Navbar />
          </SafeAreaView>
     </NavigationContainer>
  );
};

const homestyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    padding: 4,
  },
});

export default App;
