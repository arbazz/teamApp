import {Text,StyleSheet, View} from 'react-native'; 
import React from 'react';
class LogOut extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Log Out</Text>  
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
export default LogOut;