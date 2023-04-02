import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function Items({
  image,
  title,
  description,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>

        <>
          <View style={styles.mainContainer}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>Item: {title}</Text>
            <Text style={styles.description}>Description: {description}</Text>
          </View>

        </>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#b8860b",
    flexDirection: "column",
    padding: 25,
    paddingTop: 50,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
  description: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 5,
    color: "black",
  },
});