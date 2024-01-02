import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import Counter from './src/components/Counter';
import AddCartButton from './src/components/AddCartButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Cart = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./src/images/samplepic.jpg')}
        style={styles.image}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <AntDesign name="arrowleft" color="red" size={30} />
          </TouchableOpacity>
          <Text style={styles.title}>Hazelnut Signature Latte</Text>
        </View>
      </ImageBackground>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>Special Instruction</Text>
        <Text style={styles.instructionText}>
          Please let us know if you are allergic to anything or if we need to avoid anything
        </Text>
        <TextInput placeholder='Ex: no onions' style={styles.textInput} />
      </View>

      <View style={styles.footer}>
        <Counter />
        <AddCartButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: '100%',
  },
  header: {
    position: 'absolute',
    bottom: 120,
    marginLeft: 10,
  },
  backButton: {
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 0.2,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
  },
  instructionsContainer: {
    height: '50%',
    margin: 10,
    justifyContent: 'center',
    paddingTop: 50,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  instructionText: {
    fontSize: 12,
    color: 'black',
  },
  textInput: {
    width: '95%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
});

export default Cart;
