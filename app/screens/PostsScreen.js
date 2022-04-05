import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
const listings = [
  {
    id: 1,
    title: "Dry Hill/PA",
    location: "Washington",
    image: require("../assets/drytop.jpg"),
  },
  {
    id: 2,
    title: "Silver",
    location: "Idaho",
    image: require("../assets/silver.jpg"),
  },
  {
    id: 3,
    title: "Olallie",
    location: "Washington",
    image: require("../assets/firstimage.jpg"),
  },
  {
    id: 4,
    title: "Locals Only",
    location: "Oregon",
    image: require("../assets/firstspot.jpg"),
  },
  {
    id: 5,
    title: "Bachelor",
    location: "Oregon",
    image: require("../assets/bachelor.jpg"),
  },
  {
    id: 6,
    title: "White Salmon/Little MOAB",
    location: "Oregon",
    image: require("../assets/whitesalmon.jpeg"),
  },
  {
    id: 7,
    title: "Beacon Hill",
    location: "Washington",
    image: require("../assets/beacon.jpg"),
  },
  {
    id: 8,
    title: "27",
    location: "Washington",
    image: require("../assets/27.jpg"),
  },
  {
    id: 9,
    title: "Canyon Creek",
    location: "Washington",
    image: require("../assets/29.jpg"),
  },
  {
    id: 10,
    title: "Big Sky",
    location: "Montana",
    image: require("../assets/bigsky.jpg"),
  },
];

function PostsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            location={item.location}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default PostsScreen;
