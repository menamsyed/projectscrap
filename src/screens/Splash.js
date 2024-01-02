import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const Splash = () => {

    const navigation =  useNavigation();
    return (
        <View>
            <Text>Splash me</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Splash;
