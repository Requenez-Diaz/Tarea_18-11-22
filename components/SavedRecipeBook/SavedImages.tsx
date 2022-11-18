import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    img1: {},
    img2: {},
    text1: string,
    text2: string,
    rating: string,
}

export const SavedImages = ({ img1, img2, text1, text2, rating }: Props) => {
    return (
        <View style={styles.container}>

            <ImageBackground source={img1} style={styles.image} imageStyle={{ borderRadius: 10 }} >

                <View style={styles.containerheader}>
                    <View style={styles.containerRating}>
                        <AntDesign name="star" style={styles.iconStar} />
                        <Text style={styles.textRating}>{rating}</Text>
                    </View>

                    <View style={styles.containerMark}>
                        <MaterialCommunityIcons name="bookmark-minus" style={styles.iconMark} />
                    </View>

                </View>

                <View style={styles.containerStart}>
                    <AntDesign name="caretright" style={styles.iconStart} />
                </View>

                <View style={styles.containerTime}>
                    <Text style={styles.textTime}>15:10</Text>
                </View>

            </ImageBackground>

            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{text1}</Text>
                <Entypo name="dots-three-horizontal" style={styles.threePoints} />
            </View>

            <View style={styles.containerAvatar}>
                <Image source={img2} style={styles.allImages} />

                <Text style={styles.textBy}>{text2}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },

    image: {
        marginVertical: 15,
        width: "95%",
        height: "80%",
        marginLeft: 18,
    },

    containerheader: {
        justifyContent: "space-between",
        width: "95%",

    },

    containerRating: {
        backgroundColor: "rgba(52,52,52,0.4)",
        flexDirection: "row",
        justifyContent: "center",
        width: 60,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
    },

    iconStar: {
        color: "#ffffff",
        fontSize: 17,
        marginLeft: -2,
        marginTop: 2,
    },

    textRating: {
        color: "#ffffff",
        fontFamily: "Poppins_400Regular",
        marginLeft: 3,
    },

    containerMark: {
        backgroundColor: "#ffffff",
        width: 35,
        height: 35,
        borderRadius: 100,
        marginLeft: 305,
        marginTop: -35,
    },

    iconMark: {
        color: "#ee8b8b",
        fontSize: 25,
        textAlign: "center",
        marginVertical: 5,

    },

    containerStart: {
        backgroundColor: "rgba(52,52,52,0.4)",
        width: 35,
        height: 35,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 60,
    },

    iconStart: {
        fontSize: 20,
        color: "#ffffff",
        textAlign: "center",
        marginVertical: 8,
    },

    containerTime: {
        backgroundColor: "rgba(52,52,52,0.4)",
        width: 40,
        height: 20,
        marginLeft: 305,
        borderRadius: 5,
        marginVertical: 80,
        textAlign: "center",
    },

    textTime: {
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
        color: "#ffffff",
        marginVertical: 0.5,
        marginLeft: 5,
    },

    containerTitle: {
        flexDirection: "row",
        marginTop: -70,
        marginLeft: 18,
        width: "90%",
        justifyContent: "space-between",
    },

    textTitle: {
        fontFamily: "Poppins_400Regular",
        fontSize: 18,
        fontWeight: "bold",
    },

    threePoints: {
        fontSize: 20,
        color: "black",
        marginTop: 5,
    },

    containerAvatar: {
        flexDirection: "row",
        marginTop: 2,
    },

    allImages: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginLeft: 20,
        marginTop: 10,
    },

    textBy: {
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
        color: "#a9a9a9",
        marginLeft: 10,
        marginVertical: 25,
    },

});