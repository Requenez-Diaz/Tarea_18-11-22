import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from "react-native";
import RecipeSection from "./RecipeSection";

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />

      <Text style={styles.itemText}>{item.text}</Text>
      <Text style={styles.itemText}>{item.subText}</Text>
      <Text style={styles.subText}>By {item.autor}</Text>
    </View>
  );
};

const RecentList = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          listKey="Recent"
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
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default RecentList;

const SECTIONS = [
  {
    subTitle: "See All",
    iconName: "arrowright",
    title: "Recientes",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Classic",
        subText: "Hamburger",
        uri: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg",
        autor: "William Dafoe",
      },
      {
        key: "2",
        text: "Mexican",
        subText: " Burrito",
        uri: "https://cdn.pixabay.com/photo/2017/11/13/03/56/grilled-pineapple-pork-burrito-2944562_960_720.jpg",
        autor: "Dawyne Jhonson",
      },

      {
        key: "3",
        text: "Mexican",
        subText: "Steak Tacos",
        uri: "https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_960_720.jpg",
        autor: "Gordon Ramsay",
      },
      {
        key: "4",
        text: "Amazing",
        subText: "Berrys Flan",
        uri: "https://cdn.pixabay.com/photo/2017/01/06/17/18/caramel-1958358_960_720.jpg",
        autor: "Christian Murphy",
      },
      {
        key: "5",
        text: "American",
        subText: "Hot-Dog",
        uri: "https://cdn.pixabay.com/photo/2020/06/24/22/45/hot-dog-5337929_960_720.jpg",
        autor: "Rocky Balboa",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  itemText: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
  subText: {
    color: "gray",
    fontFamily: "Poppins_400Regular",
    fontSize: 10,
  },
});
