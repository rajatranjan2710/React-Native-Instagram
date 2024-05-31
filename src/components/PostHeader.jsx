import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import dot from "../../assets/dot.png";

const PostHeader = ({ item }) => {
  const arr = [1, 2, 3];
  return (
    <View style={styles.postHeader}>
      <View style={styles.headerLeft}>
        <Image
          source={{
            uri: item.profile_pic,
          }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{item.username}</Text>
      </View>
      <View>
        <TouchableOpacity style={{}}>
          {arr.map((_, index) => (
            <Image
              source={dot}
              key={index}
              style={{ width: 6, height: 6, objectFit: "cover" }}
            />
          ))}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  postHeader: {
    // backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 35,
    height: 35,
    borderRadius: 17,
    marginRight: 12,
  },
  username: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
});
