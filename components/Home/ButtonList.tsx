import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";

import { HttpClient } from "../../services/http.service";
import { ListCategoriesResponse } from "../../interfaces/index";

const COLORS = {
  primary: "#E13E3E",
  secondary: "#FFFFFF",
  tertiary: "#D5AAB3",
  bg: "transparent",
};

const client = new HttpClient();

// let categories: ListCategoriesResponse[] = [];

const ButtonList = () => {
  const [categories, setCategories] = useState<ListCategoriesResponse>({
    data: [],
    metadata: {},
  });

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(1);

  const getPopularCategories = async () => {
    const response = await client.get("categories");
    console.log(response);

    setCategories(response);
  };

  useEffect(() => {
    getPopularCategories();
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.data.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex == index ? COLORS.primary : COLORS.bg,
              ...styles.categoryBtn,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_600SemiBold",
                color:
                  selectedCategoryIndex == index
                    ? COLORS.secondary
                    : COLORS.tertiary,
              }}
            >
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ButtonList;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginLeft: 9,
    marginVertical: 15,
  },
  categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
    marginRight: 10,
    borderRadius: 10,
    paddingTop: 3,
  },
});
