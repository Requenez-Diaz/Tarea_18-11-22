import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons'

interface Props {
    image1: {},
    text1: string,
    text2: string,
    rating: string,
}

export const ProductProfile = ({ image1, text1, text2, rating }: Props) => {
    return (
        <View>
            <ImageBackground source={image1} style={styles.image} imageStyle={{ borderRadius: 10 }}>

                <View style={styles.containersRating}>
                    <AntDesign name="star" style={styles.iconRating} />
                    <Text style={styles.textRating}>{rating}</Text>
                </View>

                <View style={styles.containerPoints}>
                    <Entypo name="dots-three-horizontal" style={styles.iconThreePoints} />
                </View>

                <View style={styles.continerTitle1}>
                    <Text style={styles.textTitle1}>{text1}</Text>
                    <Text style={styles.textTitle1}>{text2}</Text>
                </View>

                <View style={styles.continerMinuts}>
                    <View style={styles.containerIngredients}>
                        <Text style={styles.textIngredients}>12 Ingredients</Text>
                    </View>

                    <Text style={styles.textMinuts}>40 min</Text>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({

    image: {
        marginVertical: 15,
        width: "95%",
        height: 220,
        marginLeft: 18,
    },

    containersRating: {
        backgroundColor: "rgba(52,52,52,0.4)",
        flexDirection: "row",
        justifyContent: "center",
        width: 60,
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 5,
    },

    iconRating: {
        color: "#ffffff",
        fontSize: 17,
        marginLeft: -2,
        marginTop: 1,
    },

    textRating: {
        color: "#ffffff",
        fontFamily: "Poppins_400Regular",
        marginLeft: 3,
        marginTop: 3,
    },

    containerPoints: {
        backgroundColor: "#ffffff",
        width: 40,
        borderRadius: 110,
        marginHorizontal: "83%",
        marginTop: -35,
    },

    iconThreePoints: {
        color: "#ee8b8b",
        fontSize: 23,
        textAlign: "center",
        marginVertical: 5,
        marginTop: 8,
    },

    continerTitle1: {
        marginTop: "22%",
        marginHorizontal: "5%",
    },

    textTitle1: {
        color: "#ffffff",
        fontFamily: "Poppins_400Regular",
        fontWeight: "bold",
        fontSize: 18,
        marginVertical: 2,
    },

    continerMinuts: {
        marginTop: 12,
        marginHorizontal: "5%",
        flexDirection: "row",
    },

    containerIngredients: {
        borderRightWidth: 1,
        borderRightColor: "#ffffff",
        width: 90,
    },

    textIngredients: {
        color: "#ffffff",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
    },

    textMinuts: {
        color: "#ffffff",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
        marginHorizontal: 10,
    },
});