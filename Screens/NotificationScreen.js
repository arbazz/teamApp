import React from 'react';  
import {Text,StyleSheet, View} from 'react-native'; 
class NotificationScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>There is no Notification Yet!</Text>  
                <Text>Our system is still in progress...</Text>
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
export default NotificationScreen;