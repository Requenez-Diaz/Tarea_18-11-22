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

      <View style={{ alignItems: "center" }}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Text style={styles.itemText}>{item.subText}</Text>
      </View>
    </View>
  );
};

const PopularAutors = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          listKey="Autors"
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

export default PopularAutors;

const SECTIONS = [
  {
    subTitle: "See All",
    iconName: "arrowright",
    title: "Creadores Populares",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Mohammed",
        subText: "Abdulah",
        uri: "https://this-person-does-not-exist.com/img/avatar-560c349e7f3636511aeeba6b84213954.jpg",
      },
      {
        key: "2",
        text: "Gregoria",
        subText: "Hernandez",
        uri: "https://this-person-does-not-exist.com/img/avatar-1349f318025d42c3781d7b4b582f0b6e.jpg",
      },

      {
        key: "3",
        text: "Gordon",
        subText: "Ramsay",
        uri: "https://getopedia.com/wp-content/uploads/2022/08/channels4_profile.jpg",
      },
      {
        key: "4",
        text: "Duki",
        subText: "Rockstar",
        uri: "https://pbs.twimg.com/profile_images/1549811611195564040/xpIK6Dte_400x400.jpg",
      },
      {
        key: "5",
        text: "Walter",
        subText: "White",
        uri: "https://uploads-ssl.webflow.com/5fa452663d18a6699f11aa07/62b46638bedf9aabc6b3c121_Walter%20white.jpg",
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
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  itemText: {
    color: "black",
    fontFamily: "Poppins_600SemiBold",
  },
});
