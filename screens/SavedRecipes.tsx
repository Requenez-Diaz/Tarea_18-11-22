import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import React from "react";
import Saved from '../components/SavedRecipeBook/Saved';

const SavedRecipes = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Saved />
    </SafeAreaView>
  );
};

export default SavedRecipes;

