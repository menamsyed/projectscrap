import React from 'react';
import {View, StyleSheet, ScrollView,Text, FlatList, TouchableOpacity} from 'react-native';
 
const LocationList = ({data}) => {

 
    return (
         <ScrollView contentContainerStyle={styles.container}>
             <FlatList
                data={data}
                keyExtractor={item=>item.id}
                renderItem={({item})=> 
                
                <View style={styles.areaTitleContainer}>
                    <TouchableOpacity>
                        <Text>{item.location_title}</Text>
                    </TouchableOpacity>
                </View>
            }
             >

             </FlatList>
         </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:"center",
        alignItems:'flex-start',
        backgroundColor:'orange',
        flex:1,
        marginTop:10
    },
    areaTitleContainer:{
        backgroundColor:'pink',
        margin:5,
        width:300,
        paddingVertical:14,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
       
        
    }
})

export default LocationList;
