import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity }
from 'react-native'
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

 

const Navbar = () => {
  return (
     <View style={navbarstyle.container}>
 
            <View>
                <TouchableOpacity style={navbarstyle.iconbox}>
                    <Foundation name="list" color="white" size={30} ></Foundation>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={navbarstyle.iconbox}>
                    <Entypo name="home" color="white" size={30} ></Entypo>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={navbarstyle.iconbox}>
                    <MaterialIcons name="person" color="white" size={30} ></MaterialIcons>
                </TouchableOpacity>
            </View>
            
     </View>
  )
}

const navbarstyle = StyleSheet.create(
    {
        container:
        {
            backgroundColor:'black',
            flexDirection:'row',
            padding:7,
            justifyContent:'space-around',
            alignItems:'center',
            
        },
        iconbox:
        {
            backgroundColor:'black',
            borderRadius:10,
            height:35,
            width:35,
            alignItems:'center',
            justifyContent:'center',
            
            
        }
        

    })

export default Navbar
