import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Screen_Height = Dimensions.get('screen').height;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });


  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <MaterialIcons name="menu" size={24} color="black" />
        <Text style={styles.headerTxt}>BYKEA</Text>
        <MaterialIcons name="add-call" size={24} color="black" />
      </View>

      {/* Banner View */}

      <View style={styles.bannerImgView}>
        <Image
          style={styles.bannerImg}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQzwjbXzb6hQYGnitjGce_YfI0YY6e6yTzg&s' }} />
      </View>

      {/* Info View */}
      <View style={styles.infoView}>
        <MaterialIcons name="attach-money" size={24} color="green" />
        <MaterialIcons name="message" size={24} color="green" />
      </View>

      {/* Bottom Container */}

      <View style={styles.bottomContainer}>
        <View style={styles.row}>
          <Cards title={"Carpool"} icon={"electric-car"} bgcolor={"#c1e1c5"} />
          <Cards title={"Ride"} icon={"bike-scooter"} bgcolor={"#bedadc"} />
        </View>
        <View style={styles.row}>
          <Cards title={"Delivery"} icon={"delivery-dining"} bgcolor={"#bedadc"} />
          <Cards title={"Mobiles"} icon={"phone-android"} bgcolor={"#c1e1c5"} />
        </View>
        <View style={styles.row}>
          <Cards title={"Shops"} icon={"shopping-bag"} bgcolor={"#c1e1c5"} />
          <Cards title={"Rentals"} icon={"watch-later"} bgcolor={"#bedadc"} />
        </View>
      </View>
    </View>
  );
}


const Cards = ({ bgcolor, icon, title }: { bgcolor: string, icon: any, title: string }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgcolor }]}>
      <Text style={{ textAlign: "right" }}>{title}</Text>
      <MaterialIcons name={icon} size={70} color="green" />
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 50,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16
  },
  headerTxt: {
    letterSpacing: 3,
    fontWeight: "bold",
    fontSize: 21,
    color: "green"
  },
  bannerImgView: {
    height: Screen_Height / 3.4,
    backgroundColor: "#DEE3E8",
    paddingHorizontal: 20,
    paddingTop: 10
  },
  bannerImg: {
    height: "90%",
    borderRadius: 12
  },
  infoView: {
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    elevation: 1,
    marginTop: -15,
    margin: 12
  },
  bottomContainer: {
    flex: 1,
    margin: 20,
    gap: 15
  },
  row: {
    flex: 1,
    flexDirection: "row",
    gap: 15
  },
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    justifyContent: "space-between"
  }
})