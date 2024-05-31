import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import heart from "../../assets/heart_w.png";

const Comment = ({ comment }) => {
  //   console.log(comment);
  return (
    <View style={styles.commentContainer}>
      <View style={styles.leftSideComment}>
        <Image source={{ uri: comment.profile }} style={styles.image} />
        <View>
          <Text style={{ color: "white" }}>{comment.username}</Text>
          <Text style={{ color: "white" }}>{comment.comment}</Text>
        </View>
      </View>
      <View>
        <Image
          source={heart}
          style={{ width: 15, height: 15, objectFit: "contain" }}
        />
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  leftSideComment: { flexDirection: "row", alignItems: "center", gap: 7 },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    objectFit: "cover",
    marginRight: 5,
  },
});
