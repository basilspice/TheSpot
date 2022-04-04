import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";


function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "darkslategrey",
  },
  logo: {
      width: 200,
      height: 200,
      position: 'absolute',
      top: 50,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "slategrey",
  },
});
export default WelcomeScreen;
