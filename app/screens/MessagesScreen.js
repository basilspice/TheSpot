import React from "react";
import { FlatList } from "react-native";
import { StyleSheet, View } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import Post from "../components/Post";

import Screen from "../components/Screen";
import  Swipeable  from "react-native-gesture-handler/Swipeable";
const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/basil.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
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
            onPress={() => console.log('Message Selected', item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
