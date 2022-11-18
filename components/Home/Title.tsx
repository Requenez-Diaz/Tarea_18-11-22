import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View style={{ margin: 20, marginBottom: -5 }}>
      <Text style={styles.title}>
        Encontrar las mejores recetas para cocinar
      </Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 24,
  },
});
