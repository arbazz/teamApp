import React, { Component } from 'react';
import { StyleSheet,Dimensions} from 'react-native';
import {Block} from "galio-framework";
import {Header, Tab,Tabs} from "native-base";
import GroundBooking from "./groundBooking";
import TeamBuilding from "./teamBuilding";
import ChallengeTeam from "./challengeTeam"

const { width, height } = Dimensions.get('screen');

class MatchMaking extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Block flex style = {styles.container}>
        <Block flex style = {styles.tabContainer}> 
        <Header />
          <Tabs >
          <Tab heading="Ground Booking"  tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
          <GroundBooking navigation={this.props.navigation}/>
          </Tab>
          <Tab  heading="Build Team" tabStyle = {{backgroundColor:"#AED6F1"}} textStyle = {{color:"black"}} activeTabStyle = {{backgroundColor:"#85C1E9"}}>
          <TeamBuilding/>
          </Tab>

          <Tab  heading="Challenge Team" tabStyle = {{backgroundColor:"#AED6F1"}}  activeTabStyle = {{backgroundColor:"#85C1E9"}} textStyle = {{color:"black"}}>
            <ChallengeTeam/>
          </Tab>
          </Tabs>
        </Block>
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

});
export default MatchMaking;
