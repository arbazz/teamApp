
import React, { Component } from 'react';
import { View, StyleSheet,Dimensions, FlatList,TouchableOpacity, ScrollView ,Image} from 'react-native';
import {Block,Text,Button,} from "galio-framework";
import {Header,Input} from "native-base";
import { EvilIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');



const playerDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danyal',
    photo:require('../assets/a.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sameed',
    photo:require('../assets/b.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Muhammad Talha',
    photo:require('../assets/c.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e92s72',
    title: 'Muhammad jaffar',
    photo:require('../assets/d.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e77a72',
    title: 'Danish',
    photo:require('../assets/e.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e11b72',
    title: 'Sultan',
    photo:require('../assets/f.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e56d72',
    title: 'Ahmed',
    photo:require('../assets/g.png')
  },
];

function Item({ photo,title}) {
  return (
    <Block middle row space = "between" card style={styles.item}>
      <TouchableOpacity style = {{width:53}}>
    <Image
    style = {{width:50,height:50}}
    source = {photo}
    />
    </TouchableOpacity>
  <Text bold style = {{right:15}}>{title}</Text>
  <Button  size = "small" style = {{backgroundColor:"#85C1E9",width:75}}>Challenge</Button>
  </Block>
  );
}
class challengeTeam extends Component {

  render() {
    return (
      <Block flex style = {styles.container}>
          <Block flex center style = {styles.challengeTeam}> 
                  <Text bold h4>Challenge A Team</Text>
                  <View style = {{width:230,borderWidth:0.5}}></View>
                  <Block flex card style = {styles.challengeTeamCard}>
                    <Block flex  style = {{backgroundColor:"#FFFFFF",margin:10}}>
                          <Header style = {{backgroundColor:"#85C1E9"}} searchBar rounded>
                            <Block Left center row style = {{backgroundColor:"#FFFFFF",width:300,borderRadius:10}}>
                            <EvilIcons name="search" size={24} color="black" />
                            <Input placeholder="Search" />
                            </Block>
                          </Header>
                          <ScrollView>
                          <Block  style = {{flex:1}}>
                    <FlatList
                    data={playerDATA}
                    renderItem={({ item }) => <Item title = {item.title} photo = {item.photo}/>}
                    keyExtractor={item => item.id}
                    />
             </Block>
                          </ScrollView>
                    </Block>
                  </Block>
            </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF"

  },
  challengeTeam:{
    paddingTop:10,
    width:width
    
  },
  challengeTeamCard:{
    backgroundColor:"#E5E7E9",
    flex:.99,
    width:330,
    margin:10,
                  
  },
  item: {
    backgroundColor:"#FFFFFF",
    padding:10,
    margin:10
    
  },
});
export default  challengeTeam;
