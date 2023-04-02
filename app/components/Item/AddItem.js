import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Divider } from "react-native-elements";
import ItemData from "./ItemData";

export default function AddItem() {

  const [itemList, setItemList] = useState([ItemData]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handelSubmit(title, description, index) {
    if (title && description !== "") {

      setItemList(itemList.map(itms => {
        return [
          ...itms,
          {
            id: ++itms.length,
            title: title, 
            description: description
          }
        ]
      }))
      setTitle("");
      setDescription("");
    } else {
      alert("Please enter a new title and description.");
    }
  };

//   To add item with title & description
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  // const handelSubmit = () => {
  //   if (title && description) {
  //     const item = {
  //       title,
  //       description,
  //     };
  //     setTitle("");
  //     setDescription("");
  //   } else {
  //     alert("Please enter the title and description.");
  //   }
  // };

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <View style={styles.viewContainer}>
          <Text style={styles.title}>Add Items</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Item title"
            onChangeText={title => setTitle(title)}
            title={title}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Item Description"
            onChangeText={description => setDescription(description)}
            description={description}
          />

          <TouchableOpacity 
          style={styles.button} 
          onPress={() => handelSubmit(title, description)}>
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
        <Divider orientation="vertical" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#ffe4b5",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 250,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  viewContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#ffe4b5",
  },
  title: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderColor: "#ffe4b5",
    borderBottomColor: "black",
  },
});