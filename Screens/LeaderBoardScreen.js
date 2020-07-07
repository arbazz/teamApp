import React from 'react';  
import {Text,StyleSheet, View} from 'react-native'; 
import LeaderBBoard from './leaderBoard'
class LeaderBoardScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <LeaderBBoard/>
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
export default LeaderBoardScreen;