// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View} from "react-native";

// import MessagesScreen from "./app/screens/MessagesScreen";
// import WelcomeScreen from './app/screens/WelcomeScreen'
// import PostsScreen from "./app/screens/PostsScreen";
// import PostingDetailsScreen from "./app/screens/PostingDetailsScreen";
// import Screen from './app/components/Screen';
// import Icon from './app/components/Icon';
// import ViewImageScreen from "./app/screens/ViewImageScreen";
// export default function App() {
//   return <WelcomeScreen/>

// }

// import React from "react";
// import { Text, Button } from "react-native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";

// import Screen from "./app/components/Screen";

// const Link = () => {
//   const navigation = useNavigation();

//   return (
//     <Button
//     title='Click'
//     onPress={() => navigation.navigate('TweetDetails')} />
//   )
// }

// const Tweets = ({navigation}) => (
//   <Screen>
//     <Text>Tweets</Text>
//     <Link />
//   </Screen>
// );

// const TweetDetails = () => (
//   <Screen>
//     <Text>Tweet Details</Text>
//   </Screen>
// );

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Tweets" component={Tweets} />
//     <Stack.Screen name="TweetDetails" component={TweetDetails} />
//   </Stack.Navigator>
// );

// export default function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }


import React, {useState} from 'react';
import {Switch} from 'react-native';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  
  
  return <Screen>
<AppPicker icon='apps' placeholder='Category' />
<AppTextInput icon='email' placeholder='Email'/>


  </Screen>;
}