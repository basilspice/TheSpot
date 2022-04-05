import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native";
import { TouchableHighlight } from "react-native";

export default function Post({ title, location, image, onPress }) {
  return (
    <TouchableHighlight
    underlayColor='offwhite'
    onPress={onPress}>
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.location}>{location}</AppText>
      </View>
    </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  location: {
      color: colors.medium 
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
      fontWeight: '400',
  }
});
