import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function FinishPage({ route, navigation }) {
  //Declaring constant variables and state hooks
  const [trip, setTrip] = useState("");
  const [tripfinal0, setTripfinal0] = useState("");
  const [tripfinal1, setTripfinal1] = useState("");
  const [tripfinal2, setTripfinal2] = useState("");
  const [tripfinal3, setTripfinal3] = useState("");
  const [tripfinal4, setTripfinal4] = useState("");
  const [tripfinal5, setTripfinal5] = useState("");
  const username = route.params; //Getting the username from previous screen

  //Function to call the API that will close the trip and show results
  function closetripAPI() {
    fetch(
      "http://localhost:8080/closetrip?tripName=" +
        trip +
        "&username=" +
        username
    )
      .then((result) => result.json())
      .then((json) => {
        setTripfinal0("-" + json[0]);
        setTripfinal1("-" + json[1]);
        setTripfinal2("-" + json[2]);
        setTripfinal3("-" + json[3]);
        setTripfinal4("-" + json[4]);
        setTripfinal5("-" + json[5]);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Image
          style={styles.logo}
          source={require("./assets/bflogo-nobg.png")}
        />

        {/* Asking the user for trip name */}
        <Text style={styles.title}>
          Finish your trip and get your final report
        </Text>

        <View style={styles.textandinput}>
          <Text style={styles.descriptiontext}>Trip name</Text>

          <TextInput
            style={styles.input}
            placeholder="japan2021"
            onChangeText={setTrip}
          />
        </View>

        {/* Calling the API */}
        <TouchableOpacity onPress={closetripAPI} style={styles.touchopa}>
          <Text style={styles.btntext}>FINISH</Text>
        </TouchableOpacity>
      </View>

      {/* Showing the results */}
      <View style={styles.box2}>
        <Text style={styles.resulttext}>{tripfinal0}</Text>
        <Text style={styles.resulttext}>{tripfinal1}</Text>
        <Text style={styles.resulttext}>{tripfinal2}</Text>
        <Text style={styles.resulttext}>{tripfinal3}</Text>
        <Text style={styles.resulttext}>{tripfinal4}</Text>
        <Text style={styles.resulttext}>{tripfinal5}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    backgroundColor: "#f5304f",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    width: "100%",
    flex: "2",
  },
  box2: {
    backgroundColor: "#00eafa",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "20px",
    width: "100%",
    flex: "3",
  },
  title: {
    fontFamily: "tahoma",
    fontSize: 16,
    margin: "10px",
    color: "white",
  },
  input: {
    height: 30,
    width: 180,
    borderColor: "white",
    borderWidth: 1,
    color: "white",
  },
  textandinput: {
    flexDirection: "row",
  },
  descriptiontext: {
    margin: "10px",
    fontFamily: "tahoma",
    color: "white",
    fontSize: 13,
  },
  resulttext: {
    fontFamily: "tahoma",
    fontSize: 14,
    margin: "10px",
    textAlign: "center",
  },
  touchopa: {
    backgroundColor: "#38b6ff",
    borderRadius: 5,
  },
  btntext: {
    margin: "10px",
    fontFamily: "tahoma",
    color: "white",
    fontWeight: "bold",
  },
  logo: {
    width: 200,
    height: 75,
    marginVertical: "5px",
  },
});
