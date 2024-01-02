import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Button from '../components/Button';
const PhoneVerification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txtbox}>
        <Text style={styles.txt1}>What's your mobile number?</Text>
        <Text style={styles.txt2}>
          Please enter your phone number and tap "login" to verify.
        </Text>
      </View>

      <View style={styles.inputcontainer}>
        <Text style={styles.txt3}>Enter your Mobile Number</Text>
        <TextInput
          placeholder="03XX-XXXXXXX"
          style={styles.inputbox}></TextInput>
      </View>

      <Button name={'Login'} />

      <View>
        <TouchableOpacity>
          <Text style={styles.txt4}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.policybox}>

        <Text style={{color:'white', fontWeight:'700', fontSize:15}}>By resgistring,you accept our</Text>
        <View style={styles.tncbox}>
          <TouchableOpacity>
            <Text style={{color:'white', textDecorationLine:"underline", fontWeight:'600'}}>Term & Conditions</Text>
          </TouchableOpacity>
          <Text style={{color:'white',fontWeight:'400'}}> and </Text>
          <TouchableOpacity>
            <Text style={{color:'white', textDecorationLine:"underline", fontWeight:'600'}}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
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

  txt1: {
    color: 'white',
    fontSize: 28,
    textAlign: 'left',
    fontWeight: '600',
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
    fontSize:15
  },

  txtbox: {
    width: '100%',
    marginLeft: 25,
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
    marginVertical: 12,
  },
  policybox: {
    color: 'black',
    alignContent:'center',
    alignItems:'center',
    paddingVertical:'70%'
  },
  tncbox:{
    flexDirection:'row',
    margin:4,

    
  }
});

export default PhoneVerification;
