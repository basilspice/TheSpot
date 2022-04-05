import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";

import MessagesScreen from "./app/screens/MessagesScreen";
import WelcomeScreen from './app/screens/WelcomeScreen'
import PostsScreen from "./app/screens/PostsScreen";
import PostingDetailsScreen from "./app/screens/PostingDetailsScreen";
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ViewImageScreen from "./app/screens/ViewImageScreen";
export default function App() {
  return <WelcomeScreen/>

  

  
}


{/* 
<WelcomeScreen/>
<PostsScreen/>
<PostingDetailsScreen/>
<ViewImageScreen/>
<MessagesScreen/>
 */}