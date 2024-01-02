import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';

import DropDown from '../../components/AddAddressCOm/DropDown';
import MapView, {Marker} from 'react-native-maps';
import HeaderIcon from '../../components/AddAddressCOm/HeaderIcon';

const AddAddress = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderIcon icon1={"arrow-back"} />
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: 24.862784642322254,
          longitude: 67.07356366886462,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}>
        <Marker
          coordinate={{
            latitude: 24.862784642322254,
            longitude: 67.07356366886462,
          }}
        />
      </MapView>

      <DropDown />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mapContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default AddAddress;
