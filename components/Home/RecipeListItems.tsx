import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import RecipeSection from "./RecipeSection";
import AvatarList from "./AvatarList";
import PlateList from "./PlateList";
import RecentList from "./RecentList";
import PopularAutors from "./PopularAutors";
import { ListRecipesResponse } from "../../interfaces/index";

import { HttpClient } from "../../services/http.service";

const client = new HttpClient();

const ListItem = ({ item }: any) => {
  console.log("item::;", item);

  return (
    <View style={styles.item}>
      <View>
        <ImageBackground
          source={{
            uri: item.image,
          }}
          style={styles.itemPhoto}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.rating}>
              <AntDesign name="star" size={15} color="white" />
              <Text style={styles.rate_text}>{item.rating}</Text>
            </View>
            <View style={styles.bookmark}>
              <View style={styles.fav}>
                <Feather name="bookmark" size={25} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.play_button}>
            <TouchableOpacity style={styles.play}>
              <Entypo name="controller-play" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <View style={styles.time}>
              <Text style={styles.rate_text}>{item.time}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View>
          <Text style={styles.itemText}>{item.title}</Text>
          <AvatarList name={item.author} avatar={item.avatar} />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Feather name="more-horizontal" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const RecipeListItems = () => {
  const [trending, setTrending] = useState<ListRecipesResponse>({
    data: [],
    metadata: {},
  });

  const getTrendingRecipes = async () => {
    const response = await client.get("recipes");
    setTrending(response);
  };

  useEffect(() => {
    getTrendingRecipes();
  }, []);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          listKey="Main"
          renderSectionHeader={({ section }) => (
            <>
              <RecipeSection
                title={section.title}
                SubTXT={section.subTitle}
                iconName={section.iconName}
              />
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={trending.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
              <PlateList />
              <RecentList />
              <PopularAutors />
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </View>
    </View>
  );
};

export default RecipeListItems;

const SECTIONS = [
  {
    title: "En Tendencia 🔥",
    subTitle: "See All",
    iconName: "arrowright",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "How to make sushi at home",
        uri: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2019/10/15/5e9977d4903ac.jpeg",
        rating: "4,5",
        time: "17:24",
        user: "James Bond",
        avatar: "https://randomuser.me/api/portraits/men/43.jpg",
      },
      {
        key: "2",
        text: "How to make hamburger at home",
        uri: "https://parade.com/.image/t_share/MTkwNTc4MzQwODAyNjAyMTA5/hamburger-with-fries-and-vegetables.jpg",
        rating: "4,6",
        time: "15:04",
        user: "Luis Fries",
        avatar: "https://randomuser.me/api/portraits/men/26.jpg",
      },

      {
        key: "3",
        text: "How to make a salad in home",
        uri: "https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_960_720.jpg",
        rating: "4,3",
        time: "13:00",
        user: "Diana Smith",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      },
      {
        key: "4",
        text: "How to make a birthday cake",
        uri: "https://cdn.pixabay.com/photo/2015/08/31/23/42/cake-916253_960_720.jpg",
        rating: "4,0",
        time: "12:34",
        user: "Angelica Cruz",
        avatar: "https://randomuser.me/api/portraits/women/71.jpg",
      },
      {
        key: "5",
        text: "How to cook a tasty chicken",
        uri: "https://cdn.pixabay.com/photo/2016/02/24/03/04/chicken-1218968_960_720.jpg",
        rating: "4,9",
        time: "11:30",
        user: "Chana Smith",
        avatar: "https://randomuser.me/api/portraits/women/66.jpg",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  itemText: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
  play: {
    backgroundColor: "#B9B5B0",
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 4,
    opacity: 0.8,
  },
  rating: {
    backgroundColor: "#B9B5B0",
    width: 60,
    borderRadius: 5,
    margin: 10,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  rate_text: {
    color: "white",
    fontFamily: "Poppins_600SemiBold",
    paddingHorizontal: 5,
  },
  time: {
    backgroundColor: "#B9B5B0",
    width: 60,
    borderRadius: 5,
    margin: 10,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  play_button: {
    justifyContent: "center",
    alignItems: "center",
    height: "55%",
  },
  bookmark: {
    alignItems: "flex-end",
    flex: 1,
  },
  fav: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
  },
});
