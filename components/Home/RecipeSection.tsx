import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  title?: string;
  iconName?: keyof typeof AntDesign.glyphMap | any;
  SubTXT?: string;
}

const RecipeSection: FC<Props> = ({ title, iconName, SubTXT }) => {
  return (
    <View>
      <View style={{ flexDirection: "row", paddingLeft: 10 }}>
        <View>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 18 }}>
            {title}
          </Text>
        </View>
        <View style={styles.SubTitle}>
          <Text style={styles.SubText}>{SubTXT}</Text>
          <AntDesign name={iconName} size={24} color="#E13F3C" />
        </View>
      </View>
    </View>
  );
};

export default RecipeSection;

const styles = StyleSheet.create({
  SubTitle: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  SubText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    color: "#E13F3C",
    paddingHorizontal: 5,
  },
});
