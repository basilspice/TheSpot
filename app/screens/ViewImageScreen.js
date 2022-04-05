import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from '../config/colors'

function ViewImageScreen(props, onPress) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="email" color="white" size={30} />
      </View>
      <View style={styles.starIcon}>
      <TouchableHighlight underlayColor={colors.gold} onPress={onPress}>
        <MaterialCommunityIcons
          name="star"
          size={35}
          color={colors.light}
        />
        </TouchableHighlight>
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/drytop.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 55,
    left: 30,
  },
  starIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
