import { StyleSheet, Text, View, Image } from "react-native";
import React, { FC } from "react";

interface AvatarProps {
  name: string;
  avatar: string;
}

const AvatarList: FC<AvatarProps> = ({ name, avatar }) => {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
    >
      <Image style={styles.avatarimg} source={{ uri: avatar }} />
      <Text style={styles.username}>By {name}</Text>
    </View>
  );
};

export default AvatarList;

const styles = StyleSheet.create({
  username: {
    fontFamily: "Poppins_400Regular",
    color: "gray",
    fontSize: 14,
    paddingLeft: 10,
  },
  avatarimg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
});
