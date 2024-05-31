import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import logo from "../../assets/insta.png";
import Stories from "../components/Stories";
import heart from "../../assets/heart_w.png";
import message from "../../assets/message_w.png";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      {/* //right side icons  */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icons}>
          <Image source={heart} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icons}>
          <Image source={message} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    // backgroundColor: "red",
    justifyContent: "space-between",
  },
  logoContainer: {
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 150,
  },
  logo: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  iconContainer: {
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icons: {
    width: 25,
    height: 25,
    marginHorizontal: 8,
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
