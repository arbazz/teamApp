import React, { Component } from 'react';
import { View, FlatList, ScrollView } from 'react-native';
import { Block, Text } from "galio-framework";
import { Header, Input } from "native-base";
import { EvilIcons } from '@expo/vector-icons';
import firebase from '../firebase';
import { styles, Item } from './challengeTeam';


export class challengeTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      uid: ''
    };
  }

  componentDidMount() {
    this.fetchCurrentUser();
    this.fetchTeams();
  }

  fetchCurrentUser = () => {
    const that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // console.log(uid);
        that.setState({ uid });
        // ...
      }
      else {
        // User is signed out.
        // ...
      }
    });

  };


  handleChallenge = (docId) => {
    const { uid } = this.state;
    console.log("challenge", docId);
    firebase.firestore().collection("teams").doc(docId).update({
      challengedBy: uid
    })
      .then(function () {
        console.log("Document successfully written!");
        alert("challeneged");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

  };

  fetchTeams = () => {
    var teamsRef = firebase.firestore().collection("teams");
    let temp = [];
    let that = this;
    teamsRef.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        temp.push({ docId: doc.id, docData: doc.data() });
      });
      that.setState({
        data: temp
      });
    });

  };

  render() {
    return (
      <Block flex style={styles.container}>
        <Block flex center style={styles.challengeTeam}>
          <Text bold h4>Challenge A Team</Text>
          <View style={{ width: 230, borderWidth: 0.5 }}></View>
          <Block flex card style={styles.challengeTeamCard}>
            <Block flex style={{ backgroundColor: "#FFFFFF", margin: 10 }}>
              <Header style={{ backgroundColor: "#85C1E9" }} searchBar rounded>
                <Block Left center row style={{ backgroundColor: "#FFFFFF", width: 300, borderRadius: 10 }}>
                  <EvilIcons name="search" size={24} color="black" />
                  <Input placeholder="Search" />
                </Block>
              </Header>
              <ScrollView>
                <Block style={{ flex: 1 }}>
                  <FlatList
                    data={this.state.data}
                    renderItem={({ item, i }) => <Item {...item} that={this} />}
                    keyExtractor={item => item.id} />
                </Block>
              </ScrollView>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}
