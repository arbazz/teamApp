import React from 'react';
import { StyleSheet,Dimensions,Image } from 'react-native';
import {Block,Card,Text} from "galio-framework";
import { Images } from '../constants';

const dummyPost1 =
    'Hellow guys this is just a dummy post data for testing my application...'


function Post1 (props) {
  return (
    <Block block  style = {styles.container}> 
                <Block block card style = {styles.posts}>
                  <Block row  >
                        <Image
                              style={styles.avatarPost}
                              source={require('../assets/c.png')}
                                
                              
                        />
                        <Text bold size= {18} style = {{top:15}}>{props.name}</Text>
                        <Text muted size= {15} style = {{top:18,paddingLeft:5}}>writes this post:</Text>
  <Text  size= {18} style = {{top:14,paddingLeft:5,color:"red"}}>{props.day}</Text>
                  </Block>
                  <Block block style = {{margin:5}}>
                            <Text>{dummyPost1}</Text>
                  </Block>
                </Block>
    </Block>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E5E7E9',
  },
  posts:{
    marginTop:0,
    backgroundColor:"#E5E7E9"
  },
  avatarPost:{
    backgroundColor:"#FFFFFF",
    width: 50,
    height: 50,
    borderRadius:25,
    margin:10

  },
});
export default Post1;