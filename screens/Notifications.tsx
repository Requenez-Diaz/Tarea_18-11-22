import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Tostada from "../components/HowToMake/Tostada";

const Notifications = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      
      <Tostada/>
    </SafeAreaView>
  );
};

export default Notifications;
