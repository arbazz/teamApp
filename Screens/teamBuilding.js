import React, { Component } from 'react';
import { View, StyleSheet,Dimensions, Picker,TouchableOpacity, ScrollView ,Image} from 'react-native';
import {Block,Text,Button,Input} from "galio-framework";
import {Form, Item} from "native-base";
import { Images } from '../constants';
const { width, height } = Dimensions.get('screen');


class TeamBuilding extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      Ground: "Choose...",
    }    
    
  }
  render() {
    return (
      <Block flex style = {styles.container}>
                       <Block flex center style = {styles.buildTeam}> 
                  <Text bold h4 >Build Your Team</Text>
                  <View style = {{width:200,borderWidth:0.5}}></View>
                  <Block flex card style = {styles.buildTeamCard}>
                    <Form>
                    <Item >
                          <Text bold h5 style = {{left:10}} >Select Type:</Text>
                          <Picker
                                mode = "dropdown"
                                style = {{width:150,left:20}}
                                selectedValue = {this.state.Ground}
                                onValueChange={(itemValue) => this.setState({Ground: itemValue})}
                          >
                                  <Picker.Item label = {this.state.Ground}/>
                                  <Picker.Item label="FootBall" value="fb" />
                                  <Picker.Item label="Footsoll" value="fs" />
                          </Picker>
                          </Item>                          
                    </Form>
                    <Block row space = "around" center card style = {{width:280,height:50,marginTop:3,backgroundColor:"#FFFFFF"}} >
                            <Text>Team:</Text>
                            <Input placeholder = "Enter Team Name"></Input>
                      </Block>
                      <Block row center space = "around"  card style = {{width:280,height:50,marginTop:3,backgroundColor:"#FFFFFF"}} >
                            <Text>Captain:</Text>
                            <Input placeholder = "Enter Captain Name"></Input>
                      </Block>
                    <Text center bold h5 style = {{paddingTop:3}} >Search a Player</Text>
                    <Block center card style = {{width:300,height:175,backgroundColor:"#FFFFFF"}}>
                      <ScrollView>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              <Block block card center space = "between" row style = {{height:50,width:275,marginTop:5,backgroundColor:"#E5E7E9"}}>
                                  <Block row center>
                                        <TouchableOpacity>
                                            <Image
                                            style={{left:10,width:40,height:40,borderRadius:10}}
                                            source={{
                                              uri: Images.Avatar,
                                            }}
                                          />
                                          </TouchableOpacity>
                                            <Text  size={18} style = {{left:10}}  >Danyal</Text>
                                  </Block>
                                  <Block row center>
                                          <View style = {{width:80,height:40,alignItems:"center",justifyContent:"center",borderWidth:0,borderRadius:10,backgroundColor:"#FFFFFF"}}>
                                            <Text >Request</Text>
                                          </View>
                                        <Button onlyIcon icon="arrowright" iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                                  </Block>
                              </Block>
                              </ScrollView>
                      </Block>

                  </Block>
                  <Button round uppercase color="#85C1E9">Build</Button>
            </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#FFFFFF"

  },
  
  buildTeam:{
    paddingTop:0,
    width:width
  },
  buildTeamCard:{
    backgroundColor:"#E5E7E9",
    flex:.99,
    width:330,
    margin:2,
                  
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
                  
  }
})
export default TeamBuilding;