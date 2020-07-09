import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Picker, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Block, Text, Button, Input } from "galio-framework";
import { Form, Item } from "native-base";
import { Images } from '../constants';
import firebase from '../firebase';
import { cloneDeep } from 'lodash'

const { width, height } = Dimensions.get('screen');




class TeamBuilding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Ground: "Choose...",
      teamName: '',
      captainName: '',
      players: [],
      search: '',
      allPlayer: []

    }
  }

  handleAddPlayer = (e, i) => {
    // let temp = this.state.allPlayer[i].pending = true
    var temp = this.state.allPlayer.slice();
    temp[i].pending = true;
    this.setState({
      allPlayer: temp
    })
    console.log(temp)

    this.setState({
      players: [e, ...this.state.players],

    })

  }

  handleBuild = () => {
    const { Ground, teamName, captainName, players } = this.state;

    if (Ground === "fb" || Ground === "fs") {
      console.log("footbal");
      if (!teamName || !captainName) {
        alert("please fill the fields");
      } else {
        if (players.length) {
          this.build();
        } else {
          alert("please request the players");
        }
      }
    } else {
      alert("please select the ground")
    }
  }

  componentDidMount() {
    this.addPlayer()
    this.setState({
      allPlayer: [
        { name: "Danyal", pending: false },
        { name: "Danyal1", pending: false },
        { name: "Danyal2", pending: false },
        { name: "Danyal3", pending: false },
        { name: "Danyal4", pending: false },
        { name: "Danyal5", pending: false },
        { name: "Danyal6", pending: false },
        { name: "Sameer", pending: false },
        { name: "Danyal7", pending: false },
        { name: "Danyal8", pending: false },
        { name: "Danyal9", pending: false },
        { name: "Danyal10", pending: false },
        { name: "Danyal11", pending: false },
      ],
      dataStore:  [
        { name: "Danyal", pending: false },
        { name: "Danyal1", pending: false },
        { name: "Danyal2", pending: false },
        { name: "Danyal3", pending: false },
        { name: "Danyal4", pending: false },
        { name: "Danyal5", pending: false },
        { name: "Danyal6", pending: false },
        { name: "Sameer", pending: false },
        { name: "Danyal7", pending: false },
        { name: "Danyal8", pending: false },
        { name: "Danyal9", pending: false },
        { name: "Danyal10", pending: false },
        { name: "Danyal11", pending: false },
      ],
    })
  }

  build = () => {
    const { Ground, teamName, captainName, players } = this.state;
    firebase.firestore().collection("teams").add({
      Ground,
      teamName,
      captainName,
      players
    })
      .then(function () {
        console.log("Document successfully written!");
        alert("team is added")
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  handleSearch = (e) => {
    this.setState({ search: e });
    var filter = "name";
    var keyword = "d";
    console.log('Search', e)
      var item = this.state.dataStore.filter(item=>item.name.toLowerCase().includes(e));

      console.log(item)
    this.setState({ allPlayer: item })
  }

  addPlayer = () => {
    let player = [];
    for (let i = 0; i < 10; i++) {
      // console.log(this.state['player' + i])
      player.push(

      )
    }
    this.setState({ allPlayer: player })
  }

  render() {
    // console.log(this.state.teamName)
    const { allPlayer } = this.state
    return (
      <Block flex style={styles.container}>
        <Block flex center style={styles.buildTeam}>
          <Text bold h4 >Build Your Team</Text>
          <View style={{ width: 200, borderWidth: 0.5 }}></View>
          <Block flex card style={styles.buildTeamCard}>
            <Form>
              <Item >
                <Text bold h5 style={{ left: 10 }} >Select Type:</Text>
                <Picker
                  mode="dropdown"
                  style={{ width: 150, left: 20 }}
                  selectedValue={this.state.Ground}
                  onValueChange={(itemValue) => this.setState({ Ground: itemValue })}
                >
                  <Picker.Item label={this.state.Ground} />
                  <Picker.Item label="FootBall" value="fb" />
                  <Picker.Item label="Footsoll" value="fs" />
                </Picker>
              </Item>
            </Form>
            <Block row space="around" center card style={{ width: 280, height: 50, marginTop: 3, backgroundColor: "#FFFFFF" }} >
              <Text>Team:</Text>
              <Input
                value={this.state.teamName}
                onChangeText={e => this.setState({ teamName: e })}
                placeholder="Enter Team Name"></Input>
            </Block>
            <Block row center space="around" card style={{ width: 280, height: 50, marginTop: 3, backgroundColor: "#FFFFFF" }} >
              <Text>Captain:</Text>
              <Input
                value={this.state.captainName}
                onChangeText={e => this.setState({ captainName: e })}
                placeholder="Enter Captain Name"></Input>
            </Block>
            <Input
              center bold h5 style={{ paddingTop: 3, width: '85%', alignSelf: 'center' }}
              value={this.state.search}
              onChangeText={e => this.handleSearch(e)}
              placeholder="Search a Player"></Input>
            <Block center card style={{ width: 300, height: 175, backgroundColor: "#FFFFFF" }}>
              <ScrollView>
                {!!allPlayer.length && allPlayer.map((e, i) => {
                  return (
                    <Block block card center space="between" row style={{ height: 50, width: 275, marginTop: 5, backgroundColor: "#E5E7E9" }}>
                      <Block row center>
                        <TouchableOpacity>
                          <Image
                            style={{ left: 10, width: 40, height: 40, borderRadius: 10 }}
                            source={{
                              uri: Images.Avatar,
                            }}
                          />
                        </TouchableOpacity>
                        <Text size={18} style={{ left: 10 }}>{e.name}</Text>
                      </Block>
                      <Block row center>
                        <View style={{ width: 80, height: 40, alignItems: "center", justifyContent: "center", borderWidth: 0, borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                          <Text >Request</Text>
                        </View>
                        {!e.pending ? <Button
                          onPress={() => this.handleAddPlayer({ name: e.name, pending: true }, i)}
                          onlyIcon icon={e.pending ? "check" : "arrowright"} iconFamily="antdesign" iconSize={30} color="success" iconColor="#fff" style={{ width: 40, height: 40 }}>warning</Button>
                          :
                          <Text style={{ fontSize: 10 }}>pending</Text>
                        }
                      </Block>
                    </Block>
                  )
                })}
              </ScrollView>

            </Block>
          </Block>
          <Button
            onPress={this.handleBuild}
            round uppercase color="#85C1E9">Build</Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"

  },

  buildTeam: {
    paddingTop: 0,
    width: width
  },
  buildTeamCard: {
    backgroundColor: "#E5E7E9",
    flex: .99,
    width: 330,
    margin: 2,

  },
  challengeTeam: {
    paddingTop: 10,
    width: width
  },
  challengeTeamCard: {
    backgroundColor: "#E5E7E9",
    flex: .99,
    width: 330,
    margin: 10,

  }
})
export default TeamBuilding;