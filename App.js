import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Dimensions,
  FlatList,
} from "react-native";
import ngrams from "./ngrams";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [text, onChangeText] = useState("");
  const [ngramsData, setNgramsData] = useState();
  let itemsNumber = 0;

  const renderItem = ({ item, index }) => {
    const noOfItems = item.split(" ").length;
    let divider = false;
    if (itemsNumber === 0 || itemsNumber !== noOfItems) {
      itemsNumber = noOfItems;
      divider = true;
    }
    return (
      <View
        style={[
          styles.itemContainer,
          divider && itemsNumber > 1 ? styles.divider : {},
        ]}
        key={index}
      >
        <Text style={styles.textNumber}>{divider ? itemsNumber : " "}</Text>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ngrams Generator</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="Type in the text"
        multiline={true}
      />
      <View style={styles.buttonsContainer}>
        <Button
          style={styles.button}
          title="Generate N-grams"
          onPress={() => {
            if (text !== "") setNgramsData(ngrams(text));
          }}
        />
        <Button
          style={styles.button}
          title="Clear"
          onPress={() => {
            onChangeText("");
            setNgramsData([]);
          }}
        />
      </View>
      <FlatList
        keyExtractor={(item, index) => index}
        style={styles.list}
        data={ngramsData}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginVertical: 0,
    marginHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  container: {
    flex: 1,
    backgroundColor: "#d1ede1",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 50,
    paddingBottom: 20,
  },
  divider: {
    marginTop: 10,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    width: windowWidth - 30,
    maxHeight: 75,
    marginVertical: 10,
    backgroundColor: "white",
    fontSize: 16,
    fontFamily: "Arial",
    color: "#003E19",
  },
  list: {
    flex: 1,
    width: windowWidth - 30,
    height: windowHeight,
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#028C6A",
  },
  text: {
    flex: 6,
    fontFamily: "Arial",
    fontSize: 20,
    alignSelf: "center",
    color: "#C4DFE6",
  },
  textNumber: {
    flex: 1,
    fontFamily: "Arial",
    fontSize: 20,
    alignSelf: "center",
    color: "#C4DFE6",
  },
  title: {
    fontFamily: "Arial",
    fontSize: 25,
    textAlign: "center",
    alignSelf: "center",
    width: windowWidth,
    color: "#003E19",
    fontWeight: "bold",
  },
});
