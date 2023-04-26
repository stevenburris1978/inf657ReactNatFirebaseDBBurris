import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Items({
  id,
  category,
  price,
  image,
  title,
  description,
  date,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>

        <>
          <View style={styles.mainContainerTwo}>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={image} />
            <Text style={styles.description}>Id:  {id}</Text>
            <Text style={styles.description}>Category: {category}</Text>            
            <Text style={styles.description}>Item: {title}</Text>
            <Text style={styles.description}>Description: {description}</Text>
            <Text style={styles.description}>Price: ${price}</Text>
            <Text style={styles.description}>Date: {date}</Text>
            <View style={styles.swipeContainer}>
            <MaterialCommunityIcons name="gesture-swipe-left" size={40} color="midnightblue" />
            </View>
          </View>
          </View>
        </>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#F8F993",
    flexDirection: "column",


  },
  swipeContainer: {
    marginBottom: 10,
    marginLeft: "75%",
  },
  mainContainerTwo: {
    flex: 1,
    backgroundColor: "aqua",
    flexDirection: "column",
    paddingLeft: "5%",
    paddingRight: "5%",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginTop: 20

  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginLeft: 10,
    padding: 20,
    marginTop: 20

  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
    backgroundColor: "#F8F993",
    marginTop: 20
  },
  description: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
    backgroundColor: "#F8F993",
    marginTop: 10
  },
});