import React from 'react';
import { StyleSheet,Dimensions,ScrollView } from 'react-native';
import {Block,Card,Text,NavBar} from "galio-framework";
import {Header, Title, Left,Body,Right, Subtitle,Input,Button,Item} from "native-base";
import { EvilIcons,FontAwesome5 } from '@expo/vector-icons';
import WallPost from "../components/WallPost";
import Post1 from "../components/post1";
import Post2 from "../components/post2";



class DashBoard extends React.Component {
  render(){
  return (
          <Block flex style = {styles.container}>
          <Block block >
            <Header searchBar rounded >
               <Item>
                <EvilIcons name="search" size={24} color="black" />
                <Input placeholder="Search" />
                <FontAwesome5 name="user-friends" size={20} color="black" />
                </Item>
            </Header>
          </Block>
          <Block flex style = {styles.component} >
                <Block block>
                    <WallPost></WallPost>
                </Block>
                <Block flex style = {{backgroundColor:"#E5E7E9"}}>
                  <ScrollView>
                      <Post1 name = "Danyal" day = "1d"></Post1>
                      <Post2 name = "Sameed" day = "1d"></Post2>
                      <Post1 name = "Talha" day = "2d"></Post1>
                      <Post2 name = "Jaffar" day = "2d"></Post2>
                  </ScrollView>
                  
                </Block>
          </Block>
          
          </Block>
  );
}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF",
  },
  component:{
    margin:10,
    backgroundColor:"#FFFFFF"
  },
});

export default DashBoard;