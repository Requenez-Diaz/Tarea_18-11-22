import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//Custom Components
import Title from "../components/Home/Title";
import SearchBar from "../components/Home/SearchBar";
import RecipeListItems from "../components/Home/RecipeListItems";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Title />
      <SearchBar placeholder="Search recipes" />
      <RecipeListItems />
    </SafeAreaView>
  );
};

export default Home;
