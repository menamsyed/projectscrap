import React from 'react';
import {View, StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';
  
const SearchLocation = () => {
    return (
        <View style={styles.container}>
              <TextInput
                placeholder='Search Location'
                placeholderTextColor='white'
                style={styles.inputContainer}
                
              ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'yellow',
         width:'90%',
         alignItems:'center',
         justifyContent:'center',
         marginTop:10
         
         
            },
    inputContainer:{
        width:'100%',
        backgroundColor:'black',
        borderRadius:25,
        paddingHorizontal:15,

    }
})

export default SearchLocation;
