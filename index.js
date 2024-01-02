/**
 * @format
 */
// import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name} from './app.json';


AppRegistry.registerComponent(name, () => gestureHandlerRootHOC(App));


