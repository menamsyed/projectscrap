import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

 import Button from '../components/Button';

const Registration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtbox}>
        <Text style={styles.txt1}>Welcome to Second Cup</Text>
        <Text style={styles.txt2}>Please enter your details to continue</Text>
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.txt3}>Full Name</Text>
        <TextInput
          placeholder="Enter your Full Name"
          style={styles.inputbox}
          placeholderTextColor={'grey'}></TextInput>
        <Text style={styles.txt3}>Email</Text>
        <TextInput
          placeholder="Enter your Email"
          style={styles.inputbox}
          placeholderTextColor={'grey'}></TextInput>
        <Text style={styles.txt3}>Mobile Number</Text>
        <TextInput
          placeholder="03XX-XXXXXXX"
          style={styles.inputbox}
          placeholderTextColor={'grey'}></TextInput>
      </View>

      <Button name={'Continue'} />

      <View>
        <TouchableOpacity>
          <Text style={styles.txt4}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: '20%',
  },
  txtbox: {
    width: '100%',
    marginLeft: 25,
  },
  txt1: {
    color: 'white',
    fontSize: 28,
    textAlign: 'left',
    fontWeight: '400',
  },
  txt2: {
    color: 'white',
    fontSize: 15,
    textAlign: 'left',
    fontWeight: '700',
  },
  txt3: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
    marginTop: 18,
    alignItems: 'flex-start',
    fontWeight: '700',
  },
  txt4: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: '700',
    marginTop: 30,
  },
  inputcontainer: {
    width: '100%',
    alignItems: 'stretch',
    marginLeft: '5%',
  },

  inputbox: {
    borderWidth: 1.5,
    borderColor: 'grey',
    borderRadius: 8,
    height: 48,
    width: '94%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    fontSize: 15,
  },
});

export default Registration;
