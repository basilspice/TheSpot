import React from "react";
import { View, Image, StyleSheet } from "react-native";



import App from "../../app";
import AppText from "../components/AppText";
import colors from '../config/colors';
import Post from '../components/Post'

export default function PostingDetailsScreen() {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/firstimage.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Olallie</AppText>
        <AppText style={styles.location}>Washington</AppText>
        <View style={styles.userContainer}>
        <Post
        image={require("../assets/basil.jpg")} 
        title="Basil Breton"
        location="Washington"
        />
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer:{
      padding: 20,
  },
    image: {
    width: "100%",
    height: 300,
  },
  location: {
      color: colors.secondary,
      fontWeight: 'bold',
      fontSize: 20,
      marginVertical: 10

  },
  title: {
   fontSize: 24,
   fontWeight: '500'    
  },
  userContainer: {
      marginVertical: 40,
  }
});
