import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

//Icons
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import SavedRecipes from "../screens/SavedRecipes";
import Notifications from "../screens/Notifications";
import MiddleIcon from "../screens/MiddleIcon";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SavedRecipes" component={SavedRecipes} />
      <Tab.Screen name="MiddleIcon" component={MiddleIcon} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.bottomBar}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused ? "#EB7F7D" : "#BBBBBB";
        return (
          <TouchableOpacity
            key={index}
            onPress={() => onPress()}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            {index === 0 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="home" size={24} color={color} />
                ) : (
                  <Ionicons name="home-outline" size={24} color={color} />
                )}
              </View>
            )}
            {index === 1 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="bookmark" size={24} color={color} />
                ) : (
                  <Ionicons name="bookmark-outline" size={24} color={color} />
                )}
              </View>
            )}
            {index === 2 && (
              <View style={styles.middleicon}>
                {isFocused ? (
                  <Feather name="plus" size={24} color="white" />
                ) : (
                  <Feather name="plus" size={24} color="white" />
                )}
              </View>
            )}
            {index === 3 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="notifications" size={24} color={color} />
                ) : (
                  <Ionicons
                    name="notifications-outline"
                    size={24}
                    color={color}
                  />
                )}
              </View>
            )}
            {index === 4 && (
              <View style={styles.icon}>
                {isFocused ? (
                  <Ionicons name="person" size={24} color={color} />
                ) : (
                  <Ionicons name="person-outline" size={24} color={color} />
                )}
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {},
  bottomBar: {
    height: 80,
    backgroundColor: "#F1F1F1",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  middleicon: {
    bottom: 40,
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#E13F3C",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabs;
