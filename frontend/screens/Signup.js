import React, { useState, Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from "react-native";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(text) =>{}}
          style={styles.textInput}
          placeholder="Store Name"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(text) =>{}}
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.username}
          onChangeText={(text) =>{}}
          style={styles.textInput}
          placeholder="User Name"
          placeholderTextColor="black"
        ></TextInput>
        <TextInput
          value={this.state.password}
          onChangeText={(text) =>{}}
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="black"
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Signup;
