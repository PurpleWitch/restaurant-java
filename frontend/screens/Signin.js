import React, { useState, Component } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    username: "",
    password: "",
    error: "",
    };
  }
  onchange = (name, value) => {
    this.setState({[name]: value});
  };
  signin = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
    fetch("backend", requestOptions)
      .then((response) => response.json())
      .then((result) => {if(result.token){
        AsyncStorage.setItem("@token", result.token)
        .then(()=>{AsyncStorage.setItem("@user", this.props.route.params.user)
        .then(() => {this.props.navigation.navigate('Home')})})}
        else{this.setState({error:'Wrong username or password!'})}})
      .catch((error)=>console.error(error))
  };
  signup = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      username: this.state.username,
      password: this.state.password
    });
    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
      headers: myHeaders,
    };
    fetch("backend", requestOptions)
      .then((response) => response.json())
      .then((result) => {if(result.token){
        AsyncStorage.setItem("@token", result.token)
        .then(()=>{AsyncStorage.setItem("@user", this.props.route.params.user)
        .then(() => {this.props.navigation.navigate('Signup')})})}
      else{this.setState({error:'Username is already taken!'})}})
      .catch((error)=>console.error(error))
  };
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(text) =>{ this.onchange("username", text) }}
          style={styles.textInput}
          placeholder="User Name"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(text) =>{ this.onchange("password", text) }}
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity onPress={this.signin}>
            <Text style={styles.button}>
              Sign In
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signup}>
            <Text style={styles.button}>
              Sign Up
            </Text>
        </TouchableOpacity>
        <Text style={styles.error}>
          {this.state.error}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "rgba(0,0,0,0.2)",
    textAlign: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "orange",
    height: 30,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    textAlign: "center",
    marginTop: 30,
    paddingTop: 5,
  },
  error: {
    color: 'red',
    height: 50,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    textAlign: "center",
    marginTop: 30,
  }
});

export default Signin;
