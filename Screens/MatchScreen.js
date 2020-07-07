import React from 'react';  
import {Text,StyleSheet, View} from 'react-native'; 
import MatchMaking from './matchMaking'
class MatchScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                 <MatchMaking/>
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
export default MatchScreen;