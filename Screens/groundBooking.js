import React, { Component } from 'react';
import { View, StyleSheet, Picker, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { Block, Text, Button, Radio, } from "galio-framework";
import { Form, DatePicker, Item } from "native-base";
import firebase from '../firebase'

const { width, height } = Dimensions.get('screen');



class GroundBooking extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Area: 'Choose...',
      Ground: "Choose...",
      chosenDate: new Date(),
      time: '',
      data: [],
      six: true,
      nine: true,
      twelve: true,
      three: true
    }
    this.setDate = this.setDate.bind(this);
  }


  setDate(newDate) {

    this.setState({
      chosenDate: newDate,
    });
    this.checkAvailability();
  };

  async componentDidMount() {
    this.fetchData();

  }

  fetchData = () => {
    let that = this;
    var db = firebase.firestore();
    const { data } = this.state;
    let temp = [];
    db.collection("bookings")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          temp.push(doc.data());
        });
        that.setState({ data: temp })
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  checkAvailability = () => {
    const { Area, Ground, chosenDate, time, data } = this.state;
    const date = chosenDate.toISOString().slice(0, 10).replace(/-/g, "");
    this.setState({
      six: true,
      nine: true,
      twelve: true,
      three: true
    })
    if (data.length) {
      if (data[0].chosenDate === date) {
        if (data[0].time === "03:00 PM") {
          this.setState({ three: false });
        }
        if (data[0].time === "12:00 PM") {
          this.setState({ twelve: false })
        }
        if (data[0].time === "09:00 AM") {
          this.setState({ nine: false })
        }
        if (data[0].time === "06:00 AM") {
          this.setState({ six: false });
        }
        console.log("date found  ", data[0].chosenDate);
      } else {
      }
    }
  }

  handleBooking = () => {
    const { Area, Ground, chosenDate, time, } = this.state;
    // console.log("initiaing booking");
    // console.log("Area: ", Area);
    // console.log("Ground: ", Ground);
    if (Area === 'Choose...' || Ground === 'Choose...') {
      alert("please select the ground and loction first");
      return;
    } else if (!time) {

      alert("Please select the time of the day");
    } else {
      console.log("condition approved proceeding");
      console.log(chosenDate.toISOString().slice(0, 10).replace(/-/g, ""))
      // console.log("time : ", time)
      // this.addBooking();
      this.addBooking();

    }
  }

  addBooking = () => {
    console.log("booking")
    const { Area, Ground, chosenDate, time } = this.state;

    var db = firebase.firestore();

    db.collection("bookings").add({
      Area,
      Ground,
      chosenDate: chosenDate.toISOString().slice(0, 10).replace(/-/g, ""),
      time
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

  }

  handleRadio = (e) => {
    //  console.log("radio cliciked", e);
    this, this.setState({ time: e })
  }

  render() {
    // console.log(this.state.data)
    const { six, three, twelve, nine } = this.state;
    return (
      <Block flex style={styles.container}>
        <Block flex center style={styles.bookGround} >
          <Text bold h4 >Book A Ground</Text>
          <View style={{ width: 200, borderWidth: 0.5 }}></View>
          <Block flex card style={styles.bookGroundCard}>
            <Form>
              <Item inlineLabel>
                <Text bold h5 >Location :</Text>
                <Picker
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={this.state.Area}
                  onValueChange={(itemValue) => this.setState({ Area: itemValue })}
                >
                  <Picker.Item label={this.state.Area} />
                  <Picker.Item label="I-10" value="i10" />
                  <Picker.Item label="River Garden" value="rg" />
                  <Picker.Item label="PWD" value="pwd" />
                  <Picker.Item label="G-6" value="g6" />
                </Picker>
              </Item>
              <Item fixedLabel last>
                <Text bold h5 >Ground   :</Text>
                <Picker
                  mode="dropdown"
                  style={styles.picker}
                  selectedValue={this.state.Ground}
                  onValueChange={(itemValue) => this.setState({ Ground: itemValue })}
                >
                  <Picker.Item label={this.state.Ground} />
                  <Picker.Item label="FootBall" value="fb" />
                  <Picker.Item label="Footsoll" value="fs" />
                </Picker>
              </Item>
            </Form>
            <Text muted h5 style={{ margin: 5 }}>Check:</Text>
            <TouchableOpacity >
              <View style={styles.avalibilityCalenderButton}>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Availibility on Calender"
                  textStyle={{ color: "white", fontSize: 22 }}
                  placeHolderTextStyle={{ color: "white", fontSize: 22 }}
                  onDateChange={this.setDate}
                  disabled={false}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.avalibilityCalender}>
              <Text bold>
                Date: {this.state.chosenDate.toString().substr(4, 12)}
              </Text>
              <View style={{ width: 120, borderWidth: 0.3 }}></View>

              <ScrollView>
                {!!six && <Block block center space="around" card row style={{ height: 50, width: 260, marginTop: 5, backgroundColor: "#E5E7E9" }}>
                  <Text bold size={20} >06:00 AM</Text>
                  <Radio color="success"
                    onChange={(e) => this.handleRadio("06:00 AM")}
                  />
                </Block>}
                {!!nine && <Block block card center space="around" row style={{ height: 50, width: 260, marginTop: 5, backgroundColor: "#E5E7E9" }}>
                  <Text bold size={20} >09:00 AM</Text>
                  <Radio color="success"
                    onChange={(e) => this.handleRadio("09:00 AM")}
                  />
                </Block>}
                {!!twelve && <Block block card center space="around" row style={{ height: 50, width: 260, marginTop: 5, backgroundColor: "#E5E7E9" }}>
                  <Text bold size={20} >12:00 PM</Text>
                  <Radio color="success"
                    onChange={(e) => this.handleRadio("12:00 PM")}
                  />
                </Block>}
                {!!three && <Block block card center space="around" row style={{ height: 50, width: 260, marginTop: 5, backgroundColor: "#E5E7E9" }}>
                  <Text bold size={20} >03:00 PM</Text>
                  <Radio color="success"
                    onChange={(e) => this.handleRadio("03:00 PM")}
                  />
                </Block>}
              </ScrollView>
            </View>
          </Block>
          <Button
            round uppercase
            color="#85C1E9"
            onPress={this.handleBooking}
            style={{ marginBottom: 3, width: 200, alignself: 'center' }}>Book</Button>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF"

  },
  bookGround: {
    paddingTop: 0,
    width: width

  },
  bookGroundCard: {
    backgroundColor: "#E5E7E9",
    flex: 1,
    width: 330,
    margin: 10,
    paddingTop: 10

  },
  picker: {
    left: 50,
    width: 170,
  },
  avalibilityCalenderButton: {
    height: 48,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: "#85C1E9",
    alignItems: "center",
    justifyContent: "center"
  },
  avalibilityCalender: {
    height: 130,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",

  },

})
export default GroundBooking;