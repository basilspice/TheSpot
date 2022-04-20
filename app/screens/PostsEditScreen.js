import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  season: Yup.object().required().nullable().label("Season"),
});

const seasons = [
  { label: "Spring", value: 1 },
  { label: "Summer", value: 2 },
  { label: "Fall", value: 3 },
  { label: "Winter", value: 4 },
];

function PostsEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          location: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField maxLength={15} name="location" placeholder="Location" />
        <Picker items={seasons} name="season" placeholder="Season" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default PostsEditScreen;
