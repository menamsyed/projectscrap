import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

import {StyleSheet, View} from 'react-native';

const SelectCity = () => {
  const CITY = [
    {label: 'Islamabad', value: 'islamabad'},
    {label: 'Karachi', value: 'karachi'},
    {label: 'Lahore', value: 'lahore'},
    {label: 'Hyderabad', value: 'hyderabad'},
    {label: 'Quetta', value: 'quetta'},
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(CITY);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        
        maxHeight={200}
        disableBorderRadius={true}
        dropDownDirection="TOP"
        placeholder='Select your city'

        style={styles.dropDownContainer}></DropDownPicker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    width: '90%',
    
  },
  dropDownContainer: {
    backgroundColor: '#ede9e8',
    borderRadius: 25,
    borderColor: '#ede9e8',
  },
});

export default SelectCity;
