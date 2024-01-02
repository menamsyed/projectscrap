import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const AddCartButton = () => {
  return (
     <View style={addcartbuttonstyle.container}>
        <TouchableOpacity>
            <Text style={{color:'white',textAlign:'center',fontWeight:900}}>Add to Cart - Rs 250</Text>
        </TouchableOpacity>


     </View>
  )
}
const addcartbuttonstyle = StyleSheet.create(
    {
        container:
        { 
            backgroundColor:'black',
            width:'55%',
            borderRadius:12,
            padding:14
        },
        button:
        {

        }
    })

export default AddCartButton
