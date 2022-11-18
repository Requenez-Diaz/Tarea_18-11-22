import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  _ScrollView,
  ImageBackground,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Entypo, EvilIcons } from "@expo/vector-icons";

const Tostada = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textprincipal}>como hacer una tostada</Text>
        <Text style={styles.flecha}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Text>
        <Text style={styles.icono}>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </Text>
        <Text style={styles.estrella}>⭐</Text>
        <Text style={styles.numero}>4,5</Text>
        <Text style={styles.parentecis}>(300 Reviews)</Text>
        <Text style={styles.text}>Roberta Anny</Text>
        <Text style={styles.text}>
          <AntDesign
            style={styles.ubication}
            name="enviroment"
            size={20}
            color="red"
          />
          Bali,lndonecia
        </Text>

        <Image
          style={styles.imagen1}
          source={require("../HowToMake/img/imagen1.jpeg")}
        />
        <Image
          style={styles.img2}
          source={require("../HowToMake/img/img2.jpeg")}
        />

        <View style={styles.B}>
          <Text style={styles.b}>follow</Text>
        </View>
        <Text style={styles.Play}>
          <EvilIcons name="play" size={100} color="white" />
        </Text>

        <View>
          <Text style={styles.ingredients}>Ingredients</Text>
          <Text style={styles.items}>5 items</Text>

          <View style={styles.cuadrado1}>
            <Text style={styles.text1}>Bread</Text>
            <Text style={styles.texto1}>200g</Text>
          </View>
          <Image
            style={styles.comida}
            source={require("../HowToMake/img/sopa.jpeg")}
          />

          <View style={styles.cuadrado1}>
            <Text style={styles.text1}>Eggs</Text>
            <Text style={styles.texto1}>200g</Text>
          </View>
          <Image
            style={styles.comida}
            source={require("../HowToMake/img/huevos.jpg")}
          />

          <View style={styles.cuadrado1}>
            <Text style={styles.text1}>Milk</Text>
            <Text style={styles.texto1}>200g</Text>
          </View>
          <Image
            style={styles.comida}
            source={require("../HowToMake/img/leche.jpeg")}
          />

          <View style={styles.cuadrado1}>
            <Text style={styles.text1}>Butter</Text>
            <Text style={styles.texto1}>200g</Text>
          </View>
          <Image
            style={styles.comida}
            source={require("../HowToMake/img/manteca.jpeg")}
          />

          <View style={styles.cuadrado1}>
            <Text style={styles.text1}>Vanilla</Text>
            <Text style={styles.texto1}>200g</Text>
          </View>
          <Image
            style={styles.comida}
            source={require("../HowToMake/img/vainilla.jpeg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Tostada;

const styles = StyleSheet.create({
  container: {
    height: 1150,
    width: 360,
    top: 170,
    right: -50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  colo: {
    borderStartColor: "blue",
  },
  textprincipal: {
    top: -200,
    right: 40,
    fontWeight: "bold",
    fontSize: 25,
    width: 300,
    height: 50,
  },

  imagen1: {
    height: 200,
    width: 350,
    top: -20,
    right: 40,
    borderRadius: 10,
    Position: "center",
    position: "absolute",
  },
  flecha: {
    top: -280,
    right: 180,
  },
  icono: {
    top: -300,
    left: 120,
  },
  Play: {
    top: 40,
    right: 180,
    position: "absolute",
  },

  estrella: {
    top: 0,
    right: 190,
  },
  numero: {
    top: -15,
    right: 170,
    fontWeight: "bold",
  },
  parentecis: {
    top: -30,
    right: 110,
    color: "#c6c6c6",
  },
  img2: {
    height: 40,
    width: 40,
    top: -50,
    right: 180,
    borderRadius: 100,
    Position: "center",
  },
  B: {
    top: -90,
    left: 100,
    height: 30,
    width: 70,
    fontWeight: "#c6c6c6",
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    textAlign: "center",
  },
  b: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    top: -15,
    right: 110,
    fontWeight: "bold",
  },
  ubication: {
    paddingRight: 80,
    top: 50,
    right: 80,
  },
  ingredients: {
    top: -70,
    right: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  items: {
    top: -95,
    left: 250,
    fontSize: 20,
    color: "#c6c6c6",
  },
  cuadrado1: {
    backgroundColor: "#EDEDED",
    top: -60,
    right: 30,
    height: 80,
    width: 350,
    borderRadius: 20,
    marginBottom: 3,
  },

  text1: {
    top: 30,
    left: 80,
    fontSize: 20,
    fontWeight: "bold",
  },

  texto1: {
    top: 10,
    left: 310,
    color: "#c6c6c6",
  },
  comida: {
    height: 40,
    width: 60,
    top: -120,
    right: 20,
    borderRadius: 20,
  },

  contenedor: {
    height: 5000,
    width: 400,
  },
});
