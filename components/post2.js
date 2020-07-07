import React from 'react';
import { StyleSheet,Dimensions,Image, SafeAreaView } from 'react-native';
import {Block,Card,Text} from "galio-framework";
import { Images } from '../constants';


const dummyPost2 =
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque nisi at sapien tempor, quis finibus mi pulvinar. Sed et dignissim metus, ac pretium velit. Praesent ultricies non ipsum accumsan malesuada. Duis sit amet lorem turpis. Quisque ut augue lacinia, eleifend nisi ut, volutpat libero. Praesent aliquet bibendum elit malesuada laoreet. Vestibulum laoreet velit magna, non fermentum nisl condimentum in. Etiam ornare bibendum condimentum.'
function Post2 (props) {
  return (
    <Block block  style = {styles.container}> 
                <Block block card style = {styles.posts}>
                  <Block  row  >
                        <Image
                              style={styles.avatarPost}
                              source={require('../assets/a.png')}
                              
                        />
                        <Text bold size= {18} style = {{top:15,margin:2}}>{props.name}</Text>
                        <Text muted size= {15} style = {{top:18,paddingLeft:5}}>writes this post:</Text>
  <Text  size= {18} style = {{top:14,paddingLeft:5,color:"red"}}>{props.day}</Text>
                  </Block>
                  <Block block style = {{margin:5}}>
                            <Text>{dummyPost2}</Text>
                  </Block>
                </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF",
  },

  posts:{
    
    marginTop:5,
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
export default Post2;     