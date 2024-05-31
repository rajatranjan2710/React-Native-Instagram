import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import heart from "../../assets/heart_w.png";
import comment from "../../assets/comment.png";
import message from "../../assets/message_w.png";
import save from "../../assets/save.png";

const PostFooter = () => {
  return (
    <View style={styles.postFooter}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={heart} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={comment} style={styles.Commenticons} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={message} style={styles.icons} />
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center" }}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={save} style={styles.save} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  postFooter: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icons: {
    width: 25,
    height: 25,
    marginRight: 10,
    objectFit: "contain",
  },
  Commenticons: {
    width: 30,
    height: 30,
    marginRight: 10,
    objectFit: "cover",
  },
  save: {
    width: 24,
    height: 24,
    marginRight: 10,
    objectFit: "contain",
  },
});
