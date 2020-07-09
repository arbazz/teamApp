
import React from 'react';
import { StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Block, Text, Button, } from "galio-framework";
import { TapGestureHandler } from 'react-native-gesture-handler';
import { challengeTeam } from './challengeTeam.1';

const { width, height } = Dimensions.get('screen');



const playerDATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Danyal',
    photo: require('../assets/a.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Sameed',
    photo: require('../assets/b.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Muhammad Talha',
    photo: require('../assets/c.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e92s72',
    title: 'Muhammad jaffar',
    photo: require('../assets/d.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e77a72',
    title: 'Danish',
    photo: require('../assets/e.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e11b72',
    title: 'Sultan',
    photo: require('../assets/f.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e56d72',
    title: 'Ahmed',
    photo: require('../assets/g.png')
  },
];


export function Item(e) {
  // console.log(e.docId)
  const {uid} = e.that.state;
  return (
    <Block middle row space="between" card style={styles.item}>
      <TouchableOpacity style={{ width: 53 }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={playerDATA[Math.floor(Math.random() * 5) + 1].photo}
        />
      </TouchableOpacity>
      <Text bold style={{ right: 15 }}>{e.docData.captainName}</Text>
      <Button
        onPress={()=>{e.that.handleChallenge(e.docId)}}
        size="small"
         style={{ backgroundColor: "#85C1E9", width: 75 }}>
           {e.docData.challengedBy === uid ? "pending" :"Challenge"}
           </Button>
    </Block>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"

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

  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 10

  },
});
export default challengeTeam;
