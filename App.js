import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";


import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText"
import AppButton from './app/components/AppButton'
import colors from './app/config/colors'
import Card from './app/components/Card'
import PostingDetailsScreen from './app/screens/PostingDetailsScreen';

export default function App() {
  return <PostingDetailsScreen />


  
}
