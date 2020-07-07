import React from 'react';
import { StyleSheet, Dimensions,Image, Platform } from 'react-native';
import { Block} from 'galio-framework';
import { Images} from '../constants';


class Tab2 extends React.Component {
 
  render(){
    
  return (
  <Block flex row style={styles.mainContainer}>
    <Block flex middle row space = "evenly">
          <Block block style = {styles.profilePic}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: Images.Avatar
                  }}
                />
          </Block>
          <Block block style = {styles.profilePic}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: Images.Profile
                  }}
                />
          </Block>
          <Block block style = {styles.profilePic}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: Images.Avatar
                  }}
                />
          </Block>
          <Block block style = {styles.profilePic}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: Images.Profile
                  }}
                />
          </Block>
    </Block>
  </Block>
  );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"#E5E7E9",
  },
  profilePic:{
    width:50,
    height:50,
    backgroundColor:"black",
    borderRadius:5
  }
  
});
export default Tab2;
