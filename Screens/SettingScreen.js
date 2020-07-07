import React from 'react';  
import {Text,StyleSheet, View} from 'react-native'; 
class SettingScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Setting Screen</Text>  
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
export default SettingScreen;