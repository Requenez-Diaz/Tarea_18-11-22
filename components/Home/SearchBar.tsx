import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ ...props }) => {
  return (
    <View style={{ marginBottom: 15, paddingHorizontal: 15 }}>
      <Text style={styles.label}></Text>
      <View style={styles.inputContainer}>
        <AntDesign
          name="search1"
          size={24}
          color="gray"
          style={{ marginRight: 10 }}
        />
        <TextInput style={{ flex: 1 }} {...props} />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: "gray",
    fontFamily: "Poppins_400Regular",
  },
  inputContainer: {
    height: 45,
    backgroundColor: "white",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.3,
    borderColor: "gray",
    alignItems: "center",
    borderRadius: 10,
  },
});
