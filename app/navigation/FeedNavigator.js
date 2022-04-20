import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode='modal'screenOptions={{headerShown: false}}>
    <Stack.Screen name="Spots" component={ListingsScreen} />
    <Stack.Screen name="Spot Details" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;