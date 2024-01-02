import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';

const DeliverPickupBtn = () => {

    const DEL_PICK=[
        {
            id:1,
            title:'Delivery'
        },
        {
            id:2,
            title:'Pick Up'
        } 
    ]

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deliverybtn}>
        <Text style={styles.deltxt}>DELIVERY</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pickupbtn}>
        <Text style={styles.picktxt}>PICK UP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
         width:'90%',
        height:'7.2%',
        justifyContent:'space-evenly',
        marginBottom:10
    },

    deltxt:{
        color:'white',
        fontSize:10,
        fontWeight:'700'
    },
    deliverybtn:{
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        borderBottomLeftRadius:12,
        borderTopLeftRadius:12,
        backgroundColor:'black'
        

    },
    picktxt:{
        color:'white',
        fontSize:10,
        fontWeight:'700'
    
        
    },
    pickupbtn:{
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        borderBottomRightRadius:12,
        borderTopRightRadius:12,
        backgroundColor:'grey'
    }
});

export default DeliverPickupBtn;
