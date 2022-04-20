import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MessagesScreen from "../screens/MessagesScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}} />
    <Stack.Screen name="Messages" component={MessagesScreen}/>
  </Stack.Navigator>
);

export default AccountNavigator;