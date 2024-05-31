import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const AddComment = ({ item }) => {
  return (
    <View style={styles.addComment}>
      <Image
        source={{ uri: item.profile_pic }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          marginRight: 10,
        }}
      />
      <TextInput
        placeholder="Add a comment..."
        placeholderTextColor="gray"
        style={{ color: "gray" }}
      />
    </View>
  );
};

export default AddComment;

const styles = StyleSheet.create({
  addComment: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: "row",
  },
});
