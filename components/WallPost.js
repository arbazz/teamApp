import React from 'react';
import { StyleSheet, Dimensions,Image, Platform } from 'react-native';
import { Block, Text,Input ,Button} from 'galio-framework';
import {FontAwesome} from "@expo/vector-icons"
import { Images, } from '../constants/Images';
const { width,} = Dimensions.get('screen');



class WallPost extends React.Component {
 
  render(){
    
  return (
  <Block block style={styles.mainContainer}>
     <Block card  block style = {styles.postWall}>
        <Text bold size={20} style={{margin:10}}>Posts</Text>
        <Block row>
            <Image
            style={styles.avatarPost}
            source={
              require('../assets/c.png')
            }
           />
           <Input placeholder="What's on your mind?" color={"Black"} style={{ borderColor: "#E5E7E9",marginLeft:5 }} placeholderTextColor={"Black"}/>
           <FontAwesome name="edit" size={50} color="#85C1E9"  style = {{paddingTop:6,paddingLeft:10}}/>
      </Block>
    </Block>
  </Block>
  );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"#FFFFFF",
  },
  postWall:{
    backgroundColor:"#E5E7E9",
    marginBottom:10,
    

  },
  avatarPost:{
    backgroundColor:"#FFFFFF",
    width: 50,
    height: 50,
    borderRadius:25,
    marginLeft:10

  },
});
export default  WallPost;