import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SavedImages } from "../SavedRecipeBook/SavedImages";

export default function Saved() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.Save}>Recetas guardadas</Text>

                <View style={styles.containerDiv}>
                    <View
                        style={{
                            flexDirection: "row",
                            flex: 1,
                        }}
                    >
                        <View style={styles.btn_red}>
                            <Text style={styles.textVideo}>Video</Text>
                        </View>
                        <View style={styles.btn_white}>
                            <Text style={styles.textRecipe}>Recipe</Text>
                        </View>
                    </View>
                </View>

                <SavedImages
                    img1={require("../../Images/waffles.jpg")}
                    rating={"5,0"}
                    text1={"Como hacer una tostada"}
                    img2={require("../../Images/mujer1.jpg")}
                    text2={"By Roberta Anny"}
                />
                <SavedImages
                    img1={require("../../Images/sushi.jpg")}
                    rating={"4,5"}
                    text1={"How to make sushi at home"}
                    img2={require("../../Images/mujer2.jpg")}
                    text2={"By Niki Samantha"}
                />
                <SavedImages
                    img1={require("../../Images/cereal.jpg")}
                    rating={"4,9"}
                    text1={"Easy oatmeal recipe"}
                    img2={require("../../Images/hombre.jpg")}
                    text2={"By James Woiden"}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Save: {
        fontSize: 20,
        fontFamily: "Poppins_600SemiBold",
        color: "#181818",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: 60,
    },

    containerDiv: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },

    textVideo: {
        color: "#ffffff",
        fontFamily: "Poppins_600SemiBold",
        fontSize: 15,
    },

    textRecipe: {
        fontFamily: "Poppins_600SemiBold",
        color: "#ee8b8b",
        fontSize: 15,
    },
    btn_white: {
        backgroundColor: "transparent",
        width: "45%",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btn_red: {
        backgroundColor: "#e13f3a",
        width: "45%",
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});
