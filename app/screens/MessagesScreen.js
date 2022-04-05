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
    title: "<F>",
    description: "Bro, where is locals only at im trying to blow that place up on strava",
    image: require("../assets/basil.jpg"),
  },
  {
    id: 2,
    title: "Hero Dirt!",
    description: "I think we should go ride some bicycles",
    image: require("../assets/basil.jpg"),
  },
  {
    id: 3,
    title: "Secret Trails",
    description: "Im telling the government, forest services, biden, evergreen and your mother",
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
            onPress={() => console.log(item)}
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
