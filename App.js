import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";


import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from "./app/components/AppText"
import AppButton from './app/components/AppButton'
import colors from './app/config/colors'
import Card from './app/components/Card'

export default function App() {
  return <View style={{
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,

  }}><Card
  title="Olallie"
  location="Washington"
  image={require("./app/assets/background1.jpg")}
  /></View>
}
