import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
} from "react-native";
import ButtonList from "./ButtonList";
import RecipeSection from "./RecipeSection";
import { Feather } from "@expo/vector-icons";

const ListItem = ({ item }: any) => {
  return (
    <View style={styles.item}>
      <View style={styles.platelist}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />

        <View style={{ alignItems: "center", bottom: 45 }}>
          <Text style={styles.plate_name}>{item.text}</Text>
          <Text style={styles.plate_name}>{item.description}</Text>
          <View style={{ width: 120, marginTop: 5 }}>
            <Text
              style={{
                fontFamily: "Poppins_400Regular",
                color: "gray",
                fontSize: 12,
              }}
            >
              Time
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 14 }}>
                10 Mins
              </Text>
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: 40,
                    height: 24,
                    width: 24,
                  }}
                >
                  <Feather name="bookmark" size={20} color="black" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const PlateList = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          listKey="Plates"
          renderSectionHeader={({ section }) => (
            <>
              <RecipeSection title={section.title} />
              <ButtonList />
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
      </View>
    </View>
  );
};

export default PlateList;

const SECTIONS = [
  {
    title: "Categoria Popular",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Balela",
        description: "Fresh Salad",
        uri: "https://cdn.shopify.com/s/files/1/0559/0250/3067/products/BalelaBowl-edited.png?v=1651858739",
      },
      {
        key: "2",
        text: "Mung Bella",
        description: "Khichdi",
        uri: "https://fitkitchenfood.com/wp-content/uploads/2019/01/plate-4.png",
      },

      {
        key: "3",
        text: "Potato Grill",
        description: "Beef",
        uri: "https://cdn.hellofresh.com/us/cms/plans/Pork-Recipe-700x700.png",
      },
      {
        key: "4",
        text: "Pumpkin Spice",
        description: "Waffles",
        uri: "https://cdn.shopify.com/s/files/1/0559/0250/3067/products/PumpkinSpiceWaffle.png?v=1665975570",
      },
      {
        key: "5",
        text: "Spagethi ",
        description: "Bologñesa",
        uri: "https://www.rossiinternational.co.uk/wp-content/themes/rossi/assets/images/pasta-dish.png",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {},
  item: {
    margin: 10,
    marginTop: 40,
  },
  itemPhoto: {
    width: 120,
    height: 120,
    top: -40,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
  platelist: {
    backgroundColor: "#F1F1F1",
    height: 190,
    width: 140,
    alignItems: "center",
    borderRadius: 10,
  },
  plate_name: {
    fontFamily: "Poppins_600SemiBold",
  },
});
