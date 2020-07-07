import React from 'react';  
import {Text,StyleSheet, View} from 'react-native'; 
class Chatroom extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>chat Room</Text>  
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
export default Chatroom;