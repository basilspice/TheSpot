import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.primary}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 25,
    borderWidth: 2,
    bottom: 5,
    height: 55,
    justifyContent: "center",
    width: 80,
  },
});

export default NewListingButton;