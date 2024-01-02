import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Searchbar from './Searchbar';

const Header = ({onSearch}) => {
  return (
    <View style={headerstyle.container}>
      <View style={headerstyle.iconcontainer}>
        <View
          style={{margin: 4, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialIcons name="edit-location" size={30} color="white" />
              <Text style={{color: 'white', fontSize: 10}}>
                Change location
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: 'black',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: 2,
            justifyContent: 'flex-end',
          }}>
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 7,
                backgroundColor: 'white',
                margin: 2,
                height: 36,
                width: 36,
                alignItems: 'center',
              }}>
              <MaterialIcons
                name="shopping-bag"
                size={20}
                color="#000"
                style={{margin: 8}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderRadius: 7,
                backgroundColor: 'white',
                margin: 2,
                height: 36,
                width: 36,
              }}>
              <Ionicons
                name="person-sharp"
                size={20}
                color="#000"
                style={{margin: 8}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View>
        <Searchbar onSearch={onSearch} />
      </View>
    </View>
  );
};

const headerstyle = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingBottom: 10,
  },
  iconcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 5,
  },
});

export default Header;
