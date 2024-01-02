import React, { useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import Entypo from 'react-native-vector-icons/Entypo';

import IconArea from './IconArea';
import InputArea from './InputArea';
import SaveContinueBtn from './SaveContinueBtn';

export default DropDown = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open('top');
  };
  const onClose = () => {
    modalizeRef.current?.close('alwaysOpen');
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modalize
      ref={modalizeRef}
      alwaysOpen={165}
      modalHeight={Dimensions.get('window').height * 0.7}
      onPositionChange={() => setIsModalOpen(!isModalOpen)}
      closeOnOverlayTap={true}
      tapGestureEnabled={true}
      modalStyle={{
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        elevation: 20,
      }}
      FloatingComponent={() => (
        <View style={styles.floatContent}>
          <SaveContinueBtn />
        </View>
      )}>
      <View style={styles.mainContainer}>
        <View style={styles.topBox}>
          <Text style={styles.title}>Add Address</Text>
          <TouchableOpacity
            onPress={isModalOpen ? () => onOpen() : () => onClose()}
            style={{padding: 4}}>
            <Entypo
              name={isModalOpen ? 'chevron-thin-up' : 'chevron-thin-down'}
              size={15}
              style={styles.dropIcon}></Entypo>
          </TouchableOpacity>
        </View>

        <View style={styles.inputFieldContainer}>
          <InputArea
            title={'Street, Area, Neighbourhood Name'}
            placeholder={'Ex: Business Avenue, PECHS Block 5'}
          />
          <InputArea title={'Phone'} placeholder={'03XX-XXXXXXX'} />
          <InputArea
            title={'Nearest Landmark (optional)'}
            placeholder={'Ex: 3 Talwar'}
          />
        </View>

        <IconArea />
      </View>
    </Modalize>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginVertical: 40,
  },
  topBox: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: '700',
  },
  dropIcon: {
    color: 'black',
  },

  inputFieldContainer: {
    flex: 1,
    width: '100%',
  },
  floatContent: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '1%',
    paddingVertical: '2%',
  },
});
