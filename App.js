import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack"
import LoadingScreen from "./Screens/LoadingScreen";
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Receipt from './Screens/Receipt';


import { YellowBox } from 'react-native';
import _ from 'lodash';
import {decode, encode} from 'base-64'


if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const AppStack = createStackNavigator(
  {

    Home: HomeScreen,
    Receipt: {
      screen: Receipt,
      navigationOptions: {
        header: null
      }
    }

  })
const AuthStack = createStackNavigator({

  Login: LoginScreen,
  Register: RegisterScreen

})

export default createAppContainer(

  createSwitchNavigator(

    {

      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack


    },
    {

      initialRouteName: "Loading"
    }

  ));

