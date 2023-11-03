import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SignIn</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
