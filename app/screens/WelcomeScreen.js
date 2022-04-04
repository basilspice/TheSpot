import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppButton title="Login" />
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

  logo: {
      width: 200,
      height: 250,
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
