import React, { Component } from 'react';
import { View, StyleSheet,Dimensions,TouchableOpacity,FlatList,Image} from 'react-native';
import {Block,Text} from "galio-framework";
import {Header, Title, Body,Tab,Tabs} from "native-base";
import { Avatar , Icon } from 'react-native-elements';



const playerDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danyal',
    photo:require('../assets/a.png'),
    rank:'1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Umer',
    photo:require('../assets/b.png'),
    rank:'2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Talha',
    photo:require('../assets/c.png'),
    rank:'3'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e92s72',
    title: 'jaffar',
    photo:require('../assets/d.png'),
    rank:'4'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e77a72',
    title: 'Danish',
    photo:require('../assets/e.png'),
    rank:'5'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e11b72',
    title: 'Sultan',
    photo:require('../assets/f.png'),
    rank:'6'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e56d72',
    title: 'Ahmed',
    photo:require('../assets/g.png'),
    rank:'7'
  },
];
function Item({ photo,title,rank}) {
  return (
    <Block middle row space = "around" card style={styles.item}>
      <TouchableOpacity style = {{width:53}}>
    <Image
    style = {{width:50,height:50}}
    source = {photo}
    />
    </TouchableOpacity>
  <Text bold >{title}</Text>
  <Text bold muted size = {18}>Rank:{rank}</Text>
  </Block>
  );
}
class LeaderBoard extends Component {

  render() {
    return (
      <Block flex style = {styles.container}>
      <Header   style={{ height: 150}}>
      
              <Body  style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center',paddingBottom: 50}}> 
             
               <Title style={{ color: "#e2d8db"}}>   Leaderboard  </Title>
               <Icon color="#e2d8db" name="trophy" type="font-awesome" size={18} />
                </Body>   
                </Header>
                <Block card style={{position:'absolute',left:0,right:0,top:90,height:110,
              backgroundColor:'#E5E7E9',alignItems:'center',flexDirection: 'row', paddingHorizontal: 30, }}>
                  
                  <View style={{padding : 10}}>
                  <Avatar
                          
                          size="large"
                          rounded
                          source={
                              require('../assets/a.png')
                          }
                        />
                        </View>
                        <View style={{flexDirection:'column', flex:1}}>
                        <Text style={{padding: 5}}>Sameed Ahmed</Text>
                        <Text style={{padding: 5}}>Rank : 35</Text>
                            </View>
                        
                        
                        
                  </Block>        
      
      
            <Tabs style ={{paddingTop: 50,color: 'white'}} tabBarUnderlineStyle={{borderBottomWidth:2, borderBottomColor: '#FFFFFF'
             }}>
            <Tab heading="City" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
            
                
                <Block style={{backgroundColor: '#FFFFFF', height: 390, flex: 1, flexDirection:'column'}}>
                  <Block card center style = {{backgroundColor: '#E5E7E9',height:425,width:360,borderWidth:2,margin:20}}>
                  <FlatList
                    data={playerDATA}
                    renderItem={({ item }) => <Item title = {item.title} photo = {item.photo} rank ={item.rank} />}
                    keyExtractor={item => item.id}
                    />
                  </Block>
                </Block>
           
            </Tab>
  
            <Tab heading="National" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
          
            <Block style={{backgroundColor: '#FFFFFF', height: 390, flex: 1, flexDirection:'column'}}>
                  <Block card center style = {{backgroundColor: '#E5E7E9',height:425,width:360,borderWidth:2,margin:20}}>
                  <FlatList
                    data={playerDATA}
                    renderItem={({ item }) => <Item title = {item.title} photo = {item.photo} rank ={item.rank} />}
                    keyExtractor={item => item.id}
                    />
                  </Block>
                </Block>
            
            </Tab>
  
            <Tab heading="3" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
            
            <Block style={{backgroundColor: '#FFFFFF', height: 390, flex: 1, flexDirection:'column'}}>
                  <Block card center style = {{backgroundColor: '#E5E7E9',height:425,width:360,borderWidth:2,margin:20}}>
                  <FlatList
                    data={playerDATA}
                    renderItem={({ item }) => <Item title = {item.title} photo = {item.photo} rank ={item.rank} />}
                    keyExtractor={item => item.id}
                    />
                  </Block>
                </Block>
            
            </Tab>
  
            <Tab heading="4" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
            
            <Block style={{backgroundColor: '#FFFFFF', height: 390, flex: 1, flexDirection:'column'}}>
                  <Block card center style = {{backgroundColor: '#E5E7E9',height:425,width:360,borderWidth:2,margin:20}}>
                  <FlatList
                    data={playerDATA}
                    renderItem={({ item }) => <Item title = {item.title} photo = {item.photo} rank ={item.rank} />}
                    keyExtractor={item => item.id}
                    />
                  </Block>
                </Block>
           
            </Tab>
          </Tabs>
  
  </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF"

  },
  tabContainer:{
    paddingTop:0
  },
  item: {
    backgroundColor:"#FFFFFF",
    padding:10,
    margin:10,
    width:330,

    
  },

});
export default LeaderBoard;
