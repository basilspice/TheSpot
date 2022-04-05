import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Post from "../components/Post";

import Screen from "../components/Screen";
import Swipeable from "react-native-gesture-handler/Swipeable";
const messages = [
  {
    id: 1,
    title: "Bro, where is Locals Only at?",
    description: "<F>",
    image: require("../assets/basil.jpg"),
  },
  {
    id: 2,
    title: "Hero Dirt?",
    description: "Nice",
    image: require("../assets/basil.jpg"),
  },
];

function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            location={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            //swipe right to show delete button
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
