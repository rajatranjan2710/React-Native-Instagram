import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import lock from "../../../assets/icons/locker.png";
import bars from "../../../assets/icons/bars.png";
import plus from "../../../assets/icons/plus.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileHeader = () => {
  // profile fetch from api

  return (
    <View style={styles.profileHeader}>
      <View style={styles.profileLeft}>
        <Image source={lock} style={styles.lock} />
        <Text style={styles.username}>Anastxsia</Text>
      </View>
      <View style={styles.profileRight}>
        <TouchableOpacity>
          <Image source={plus} style={styles.headerIocn} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={bars} style={styles.headerIocn} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    // backgroundColor: "red",
  },
  profileLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  lock: {
    width: 15,
    height: 15,
    objectFit: "contain",
    marginRight: 5,
  },
  username: {
    fontWeight: "500",
    fontSize: 20,
    color: "white",
  },
  profileRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIocn: {
    width: 30,
    height: 30,
    objectFit: "contain",
    tintColor: "white",
    marginLeft: 7,
  },
});
