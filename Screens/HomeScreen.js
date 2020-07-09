import React from 'react';
import { Image, StyleSheet, ScrollView, View, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import firebase from "firebase";
import { createAppContainer, SafeAreaView } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Block, Text } from "galio-framework";
import { Header, Form } from "native-base"
import { FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import ProfileScreen from './ProfileScreen';
import LeaderBoard from './LeaderBoardScreen';
import MatchScreen from './MatchScreen';
import NotificationScreen from './NotificationScreen';
import DashBoard from './dashboard'
import LeaderBoardScreen from './LeaderBoardScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

class HomeScreen extends React.Component {
  state = {
    email: "",
    displayName: ""
  };

  async  componentDidMount() {
    const { email, displayName } = firebase.auth().currentUser;

    this.setState({ email, displayName });
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <AntDesign name="logout" size={26} color="black" onPress={this.signOutUser} style={{ left: 150 }} />
        <DashBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="home" size={24} color="black" />
          </View>),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-person" size={24} color="black" />
          </View>
        ),
      }
    },
    LeaderBoard: {
      screen: LeaderBoardScreen,
      navigationOptions: {
        tabBarLabel: 'LeaderBoard',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <AntDesign name="Trophy" size={24} color="black" />
          </View>
        ),
      }
    },
    Match: {
      screen: MatchScreen,
      navigationOptions: {
        tabBarLabel: 'Match',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <FontAwesome5 name="fantasy-flight-games" size={24} color="black" />
          </View>
        ),
      }
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Ionicons name="ios-notifications" size={24} color="black" />
          </View>
        ),
      }
    },
 

  },
  {
    initialROuteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#85C1E9' },
  }
);

export default createAppContainer(TabNavigator);
