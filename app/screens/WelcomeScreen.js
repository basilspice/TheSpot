import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import colors from '../config/colors'
import routes from "../navigation/routes";
function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <View style={styles.buttonsContainer}>
      <Button title="Skip Login" color={colors.secondary} 
      // onPress={() => navigation.navigate(routes.LISTING_DETAILS)}
       />
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    blurRadius: 0,
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
