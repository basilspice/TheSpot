import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import { useEffect, useState } from "react";
import AppText from "../components/AppText";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setListings(response.data);
  };
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Could not retrieve the listings.</AppText>
          <Button title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator  visible={loading}/>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            state={item.state}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("Spot Details", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
