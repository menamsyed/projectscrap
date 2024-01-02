import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const Counter = () => {
  return (
      <View style={counterstyle.container}>
         <TouchableOpacity style={counterstyle.button}>
            <Text style={{ fontSize:15,color:'white' }}>-</Text>
         </TouchableOpacity>

         <Text style={{ fontSize:18,color:'black' }}>1</Text>
         
         <TouchableOpacity style={counterstyle.button}>
            <Text style={{ fontSize:15,color:'white' }}>+</Text>
         </TouchableOpacity>
      </View>
  )
}

const counterstyle = StyleSheet.create(
    {
        container:
        {
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            width:'35%',
            
        }
        ,
        button:
        {
            backgroundColor:'black',
            borderRadius:20,
            alignItems:'center',
            justifyContent:'center',
            height:35,
            width:35
            
        }
    })

export default Counter;
