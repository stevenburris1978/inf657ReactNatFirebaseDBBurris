import { useState } from "react";
import { FlatList, StyleSheet, View, SafeAreaView,TouchableWithoutFeedback } from "react-native";
import Constants from "expo-constants";
import ItemData from "./ItemData";
import Items from "./Items";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddItem from "./AddItem";

export default function ItemList(id) {
  const [itemList, setItemList] = useState(ItemData);

  const deleteItem = (id) => {
    setItemList(itemList.filter((item) => item.id !== id));

    console.log(ItemList);



  };
  return (


   <SafeAreaView style={styles.screen}>

      <FlatList
        ListHeaderComponent={AddItem}
        data={itemList}
        keyExtractor={(itemList) => itemList.id}
        renderItem={({ item }) => (
          <Items
            id={item.id}
            category={item.category}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
            date={item.date}
            
            renderRightActions={() => (
              <View style={styles.deleteContainer}>
                <TouchableWithoutFeedback onPress={() => deleteItem(item.id)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="black"
                  />
                </TouchableWithoutFeedback>
              </View>
            )}
          />

        )}
      />

    </SafeAreaView>
  
  );

}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
    backgroundColor: "aquamarine",
  },
  container: {
    padding: 20,
    paddingTop: 100,
  },
  secondContainer: {
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  description: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteContainer: {
    backgroundColor: "#88F726",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});