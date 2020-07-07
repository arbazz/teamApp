import React from 'react';  
import {StyleSheet,Text, View} from 'react-native'; 
import { Card,} from "react-native-elements";
import PersonalProfile from './personalProfile'
class ProfileScreen extends React.Component {  
    render() {  
      return (  
          <View style={styles.container}>  
              <PersonalProfile/>
          </View>  
      );  
    }  
  } 
  const styles = StyleSheet.create({

    container: {  
      flex: 1,  
      justifyContent: 'center',  
      alignItems: 'center'  
  }, 
  });
  export default ProfileScreen;