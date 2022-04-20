import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const seasons = [
  {backgroundColor: 'gold',icon: "weather-sunset", label: "Spring", value: 1 },
  {backgroundColor: 'dodgerblue',icon: "weather-sunny", label: "Summer", value: 2 },
  {backgroundColor: 'brown', icon: 'leaf-maple', label: "Fall", value: 3 },
  {backgroundColor: 'darkgrey', icon: 'snowflake', label: "Winter", value: 4 },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          state: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(state)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          maxLength={15}
          name="state"
          placeholder="State"
          width={120}
        />
        <Picker
          items={seasons}
          name="season"
          
          PickerItemComponent={CategoryPickerItem}
          placeholder="Season"
          width="75%"
        />
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
export default ListingEditScreen;
