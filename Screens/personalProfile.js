import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, View, Platform } from 'react-native';
import { Block, Text,theme, Input ,Button} from 'galio-framework';
import {Tab, Tabs } from 'native-base';
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import WallPost from "../components/WallPost"
const { width, height } = Dimensions.get('screen');




class PersonalProfile extends React.Component {
 
  render(){
    
  return (
  <Block flex style={styles.mainContainer}>
    <Block flex center card  style = {styles.info}>
      <Image
        style={styles.profileContainer}
        source={require('../assets/a.png')}
      />
      <Block block >
      <Text  size={28} style={{ paddingBottom: 0 }}>Sameed Ahmed</Text>
        <Block row left>
          <Text muted size={18} >Ranking:</Text>
          <Text  size={18} style={{ left: 25 }}>0</Text>
        </Block>
        <Block row left>
          <Text muted size={18} >Position:</Text>
          <Text  size={18} style={{ left: 25 }}>Football</Text>
        </Block>
        <Block row space="around" style={{ padding: theme.SIZES.BASE, }}>
        <Block middle>
            <Text bold size={12} style={{marginBottom: 2}}>5</Text>
            <Text muted size={12}>Followings</Text>
          </Block>
        <Block middle>
            <Text bold size={12} style={{marginBottom: 2}}>5</Text>
            <Text muted size={12}>Followers</Text>
        </Block>
        </Block>
      </Block>
    </Block>
    <Block flex  style = {styles.functions}>
        <WallPost/>
    <Block card  block style = {styles.statistics}>
          <Text bold size={20} style={{margin:10}}>Statistics</Text>
          <Block row  space = "evenly">
            <Text bold size={17} style={{margin:5,paddingRight:15}}>Goal:<Text muted>0</Text></Text>
            <Text bold size={17} style={{margin:5}}>Assists:<Text muted>0</Text></Text>
            <Text bold size={17} style={{margin:5}}>Clean sheet:<Text muted>0</Text></Text>
          </Block>
          <Block row  space = "between">
            <Text bold size={18} style={{margin:5,paddingLeft:15}}>Red Card:<Text muted>0</Text></Text>
            <Text bold size={18} style={{margin:5,paddingRight:22}}>Yellow Card:<Text muted>0</Text></Text>
          </Block>
          <Block row  space = "between">
            <Text bold size={18} style={{margin:5,paddingLeft:5}}>Appearances:<Text muted>0</Text></Text>
            <Text bold size={18} style={{margin:5,paddingRight:22}}>Performance:<Text muted>0</Text></Text>
          </Block>
    </Block>
    <Block   block style = {styles.teamClubs}>
          <Tabs>
          <Tab heading="Teams"  tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
            <Block flex> 
                  <Tab1/>
            </Block>
          </Tab>
          <Tab  heading="Clubs" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
            <Block flex > 
                  <Tab2/>
            </Block>
          </Tab>
    </Tabs>
    </Block >
    </Block>
  </Block>
  );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor:"#FFFFFF",
  },
  info:{
    flex:.5,
    width: width,
    backgroundColor:"#E5E7E9",
    
  },
  profileContainer:{
    width:90,
    height:90,
    borderRadius:10
  },
  functions:{
    
    width: width,
    marginTop:5,
    backgroundColor:"#FFFFFF",
  },

  statistics:{
    width:width,
    flex:.5 ,
    backgroundColor:"#E5E7E9",
  },
  teamClubs:{
    width:width,
    flex:.5,
    backgroundColor:"#E5E7E9",
    marginTop:5,
  },
});
export default PersonalProfile;