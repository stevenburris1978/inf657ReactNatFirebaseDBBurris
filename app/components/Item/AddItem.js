import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity, Image
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


  return (
    <>
      <SafeAreaView style={styles.screen}>
      <View style={styles.containerTwo}>
                <Image
                style={styles.image}
                source={require("../../../assets/shoe.png")}
               /> 
               <Text style={{ marginTop: 20, fontSize: 35, paddingLeft:5, color: "midnightblue"}}>Shopping App</Text>

               </View>
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
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  image: {
    height: 70,
    width: 70,
    marginTop: 5,

    borderRadius: 35,
    padding: 30,
},
containerTwo: {


  flex: 1,
  backgroundColor: "aquamarine",
  flexDirection: "row",
  padding: 40,
  alignItems: "stretch",
  justifyContent: "flex-start",
  width: "90%"


},
  button: {
    backgroundColor: "yellow",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 250,
    width: "25%"
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  viewContainer: {
    flex: 1,
    padding: 45,
    backgroundColor: "#ffe4b5",
    width: "90%"
  },
  title: {
    color: "black",
    fontSize: 45,
    textAlign: "center",
  },
  input: {
    height: 58,
    margin: 10,
    borderWidth: 2,
    padding: 25,
    borderColor: "green",
    borderBottomColor: "black",
  },
});