import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import AddCartButton from '../components/AddCartButton';
import Counter from '../components/Counter';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ViewItem = () => {
  const [selectedAddOn, setSelectedAddOn] = useState(null);

  const functions = {
    _onAddonTap: item => {
      setSelectedAddOn(item?.id);
    },
    _callMe: () => {},
  };
  const CATEGORY = [
    {
      id: 1,
      size: 'Small',
      price: '650',
    },
    {
      id: 2,
      size: 'Regular',
      price: '750',
    },
    {
      id: 3,
      size: 'Large',
      price: '850',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../images/con-panna.webp')}
        style={styles.image}>
        <View>
          <TouchableOpacity style={styles.backButton}>
            <AntDesign name="arrowleft" color="red" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Hazelnut Signature Latte</Text>
        </View>
      </ImageBackground>

      <View>
        <FlatList
          data={CATEGORY}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.categorybox}>
              <TouchableOpacity>
                <View style={styles.catradiobtnContainer}>
                  <RadioButton
                    value={false}
                    status={selectedAddOn == item?.id ? 'checked' : 'unchecked'}
                    onPress={() => functions._onAddonTap(item)}
                    color="black"
                  />
                  <Text style={styles.txt1}>{item.size}</Text>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={styles.txt1}>{item.price}</Text>
              </View>
            </View>
          )}></FlatList>
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>Special Instruction</Text>
        <Text style={styles.instructionText}>
          Please let us know if you are allergic to anything or if we need to
          avoid anything
        </Text>
        <TextInput placeholder="Ex: no onions" style={styles.textInput} />
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
    height: '80%',
    paddingHorizontal: 15,
    marginTop: '0%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  backButton: {
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 0.2,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginTop: '50%',
    marginBottom: 30,
  },
  instructionsContainer: {
    margin: 15,
    justifyContent: 'center',
    paddingTop: 15,
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
    width: '100%',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'black',
    alignSelf: 'center',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
    marginTop: 25,
  },
  catradiobtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  categorybox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginVertical: 1,
  },

  txt1: {
    color: 'black',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default ViewItem;
