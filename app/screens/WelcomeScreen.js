import React from "react";
import { View, ImageBackground, StyleSheet, Image } from "react-native";
import App from "../../app";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={0}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonsContainer}>
        <AppButton title="Skip Login" color={colors.secondary} />
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 250,
    position: "absolute",
    top: 50,
  },
});
export default WelcomeScreen;
