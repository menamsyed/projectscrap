import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import ViewItem from './src/screens/ViewItem';
import Cart from './src/screens/Cart';
import MyOrders from './src/screens/MyOrders';
import Contact from './src/screens/Contact';
import Setting from './src/screens/Setting';
import EditProfile from './src/screens/EditProfile';
import LoginToContinue from './src/screens/LoginToContinue';
import PhoneVerification from './src/screens/PhoneVerification';
import OTPValidation from './src/screens/OTPValidation';
import Registration from './src/screens/Registration';
import {SafeAreaView} from 'react-native-safe-area-context';
import SelectLocationScreen from './src/screens/SelectLocationScreen';
import AddAddress from './src/screens/address/AddAddress';

 // const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <AddAddress />

    //<Test/>

    //<SelectLocationScreen/>

    //<Registration/>
    //<PhoneVerification/>
    //<ViewItem/>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name='splash' component={Splash} />
    //     <Stack.Screen name='home' component={Home}/>
    //     <Stack.Screen name='view-item' component={ViewItem}/>
    //     <Stack.Screen name='cart' component={Cart} />
    //     <Stack.Screen name='my-orders' component={MyOrders}/>
    //     <Stack.Screen name='settings' component={Setting}/>
    //     <Stack.Screen name='contact' component={Contact}/>
    //     <Stack.Screen name='edit-profile' component={EditProfile}/>
    //     <Stack.Screen name='login-to-continue' component={LoginToContinue}/>
    //     <Stack.Screen name='phone-verification' component={PhoneVerification}/>
    //     <Stack.Screen name='otp-validation' component={OTPValidation}/>
    //     <Stack.Screen name='registration' component={Registration}/>

    //   </Stack.Navigator >
    // </NavigationContainer>
  );
};

export default App;
