import React from 'react';
import {View, StyleSheet, SafeAreaView,Text} from 'react-native';

import DeliverPickupBtn from '../components/LocCom/DeliverPickupBtn';
import SelectCity from '../components/LocCom/SelectCity';
import SelectButton from '../components/LocCom/SelectButton';
import LocationList from '../components/LocCom/LocationList';
import SearchLocation from '../components/LocCom/SearchLocation';

const SelectLocationScreen = () => {
    const LOC_DATA = [
        {id:1, location_title:'P&D society'},
        {id:2, location_title:'Temple Road'},
        {id:3, location_title:'Abdullah Town'},
        {id:4, location_title:'Al Hamra Town'},
        {id:5, location_title:'ASKARI V'},
        {id:6, location_title:'GULBERG'},
        {id:7, location_title:'DHA'},
        {id:8, location_title:'Eden Villas'},
        {id:9, location_title:'Valencia'},
        {id:10, location_title:'Zaman Park'},
    ]



    return (
        <SafeAreaView style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.txt1}>Please Select Your Location</Text>
                <DeliverPickupBtn/>
                <SelectCity/>
                <SearchLocation/>
                <LocationList data={LOC_DATA}/>
                <SelectButton/>

            </View> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'flex-end',
        paddingHorizontal:'8%',
        
    },
    container:{
        backgroundColor:'white',
        flex:0.8,
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        justifyContent:'space-evenly',
        alignItems:'center',
        paddingVertical:24,

        
    },
    //Please Select Your Location
    txt1:{
        color:'black',
        fontSize:17,
        textAlign:"center",
        fontWeight:'500'
    }

})

export default SelectLocationScreen;



 