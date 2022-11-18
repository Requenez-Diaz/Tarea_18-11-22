import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { ProductProfile } from './ProductProfile';

export default function DescripcionProfile() {
    return (

        <ScrollView>

            <View style={styles.containerBar}>
                <Text style={styles.textProfile}>Mi perfil</Text>
                <Entypo name="dots-three-horizontal" style={styles.points} />
            </View>

            <View style={styles.containerProfile}>
                <Image style={styles.imageProfile} source={require("../../Images/perfil.jpg")} />
                <Text style={styles.textEdit}>Edit profile</Text>
            </View>

            <Text style={styles.textMichell}>Michell Luna</Text>

            <Text style={styles.textDescription}>Hello world I´m Michell Luna, I´m from</Text>
            <Text style={styles.textDescription}>Nicaragua, I love cooking so much!</Text>

            <View style={styles.containerFollow}>
                <Text style={styles.textFollow}>Recipe</Text>
                <Text style={styles.textFollow}>Videos</Text>
                <Text style={styles.textFollow}>Followers</Text>
                <Text style={styles.textFollow}>Following</Text>
            </View>

            <View style={styles.containerFollowTwo}>
                <Text style={styles.textNumberOne}>3</Text>
                <Text style={styles.textNumberTwo}>13</Text>
                <Text style={styles.textNumberThree}>14k</Text>
                <Text style={styles.textNumberFour}>120</Text>
            </View>

            <View style={styles.containerBar2}>
                <View>
                    <Text style={styles.textVideo}>Video</Text>
                </View>

                <Text style={styles.textRecipe}>Recipe</Text>
            </View>

            <ProductProfile
                image1={require("../../Images/waffles.jpg")}
                text1={"How to make Italian"}
                text2={"Spaghetti at home"}
                rating={"5,0"}
            />

            <ProductProfile
                image1={require("../../Images/plato2.jpg")}
                text1={"Simple chicken meal"}
                text2={"prepdishes"}
                rating={"5,0"}
            />


            <ProductProfile
                image1={require("../../Images/plato3.jpg")}
                text1={"Japanese fried rice"}
                text2={" "}
                rating={"5,0"}
            />


        </ScrollView>

    );
}

const styles = StyleSheet.create({

    points: {
        color: "black",
        fontSize: 20,
        marginTop: 60,
    },

    textProfile: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#181818",
        marginHorizontal: 30,
        marginVertical: 40,
        marginTop: 50,
    },

    containerBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "98%",
        marginLeft: -10,
    },

    imageProfile: {
        width: 90,
        height: 90,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: -10,
    },

    containerProfile: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
    },

    textEdit: {
        fontSize: 15,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        color: "#e23e3e",
        backgroundColor: "#ffffff",
        borderColor: "#e23e3e",
        borderRadius: 13,
        borderWidth: 2,
        width: "31%",
        height: 45,
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: 15,

    },

    textMichell: {
        fontSize: 18,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        marginLeft: 16,
        marginTop: 15,
        marginVertical: 20,
    },

    textDescription: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        marginLeft: 16,
        color: "#a9a9a9",
    },

    containerFollow: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginLeft: 16,
        marginTop: 20,
    },

    containerFollowTwo: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#a9a9a9",
        marginVertical: 40,
    },

    textFollow: {
        fontSize: 14,
        fontFamily: "Poppins_400Regular",
        color: "#a9a9a9",
    },

    textNumberOne: {
        marginLeft: 30,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: -15,
        marginVertical: 20,
    },

    textNumberTwo: {
        marginLeft: 35,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: -15,
    },

    textNumberThree: {
        marginLeft: 35,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: -15,
    },

    textNumberFour: {
        marginHorizontal: 35,
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: -15,
    },

    containerBar2: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "98%",
        marginLeft: 20,

    },

    textVideo: {
        fontSize: 15,
        fontFamily: "Poppins_400Regular",
        color: "#ee8b8b",
        fontWeight: "bold",
        marginStart: 30,
        marginVertical: 35,
        marginTop: 5,
        marginLeft: 45,
    },

    textRecipe: {
        backgroundColor: "#e23e3e",
        color: "#ffffff",
        width: "50%",
        height: 40,
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "Poppins_400Regular",
        marginEnd: 30,
        marginTop: -5,
        borderRadius: 15,
        textAlign: "center",
        textAlignVertical: "center",
    },
});