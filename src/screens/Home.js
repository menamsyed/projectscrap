import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Home = () => {
    
    const navigation =  useNavigation();
    
    return (
        <View>
            <Text>Home Screen</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
