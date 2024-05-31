import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import thread from "../../assets/icons/thread.png";
import add from "../../assets/icons/addUser.png";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />

      {/* prfile followers and info  */}
      <View style={styles.profileInfo}>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image
            source={{
              uri: "https://i.pinimg.com/474x/eb/d7/71/ebd7712b9dc2423eb182f91b3120dab5.jpg",
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsView}>
          <Text style={styles.details}>17</Text>
          <Text style={styles.placetext}>posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsView}>
          <Text style={styles.details}>1K</Text>
          <Text style={styles.placetext}>followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsView}>
          <Text style={styles.details}>87</Text>
          <Text style={styles.placetext}>following</Text>
        </TouchableOpacity>
      </View>

      {/* profile informations  */}

      <View style={styles.profileInformation}>
        <Text style={{ color: "white", fontSize: 16 }}>Anastasia</Text>
        <View style={styles.userNameEdited}>
          <Image
            source={thread}
            style={{ width: 15, height: 15, tintColor: "white" }}
          />
          <Text style={{ color: "white" }}>Anastxsia</Text>
        </View>
        <Text style={{ color: "white", marginTop: 2 }}>
          One day or day one🤞💕{" "}
        </Text>

        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              padding: 7,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#262626",
              borderRadius: 10,
              elevation: 2,
            }}
          >
            <Text style={{ color: "white" }}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 7,
              width: 150,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#262626",
              borderRadius: 10,
              elevation: 2,
            }}
          >
            <Text style={{ color: "white" }}>Share Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 4,
              width: 40,
              backgroundColor: "#262626",
              borderRadius: 10,
              elevation: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={add}
              style={{ width: 25, height: 25, objectFit: "contain" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 40,
  },
  profileInfo: {
    marginTop: 12,
    marginBottom: 5,
    // padding: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  profileImageContainer: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    // padding: 4,
    borderColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  detailsView: {
    marginTop: 10,
    alignItems: "center",
  },
  details: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
  placetext: {
    fontWeight: "300",
    color: "white",
  },

  //profile info

  profileInformation: {
    paddingHorizontal: 15,
    // backgroundColor: "red",
  },
  userNameEdited: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    borderRadius: 20,
    backgroundColor: "#262626",
    padding: 5,
    alignSelf: "flex-start",
    marginTop: 5,
    marginHorizontal: 3,
  },
});
