import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import Comment from "./Comment";
import { TimeStamp } from "../../utils/TimeStamp";
import AddComment from "./AddComment";

const Post = ({ item }) => {
  const [isCommentOpen, setCommentOpen] = useState(false);

  const commentModelHandler = () => {
    setCommentOpen(true);
  };

  return (
    <View style={styles.container}>
      {/* post header  */}
      <PostHeader item={item} />

      {/* post image  */}
      <View style={styles.postImage}>
        <Image
          source={{ uri: item.post_image }}
          style={{ objectFit: "contain", height: "100%" }}
        />
      </View>

      {/* post footer  */}
      <PostFooter item={item} />

      {/* comment and likes  */}
      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ color: "white", fontWeight: "600" }}>
          {item.likes} Likes
        </Text>
        <Text style={{ color: "white", marginTop: 1 }}>
          <Text style={{ fontWeight: "bold" }}>{item.username}</Text>{" "}
          {item.caption}
        </Text>
        <TouchableOpacity onPress={commentModelHandler}>
          <Text style={{ color: "gray" }}>
            View all {item.comments.length} comments
          </Text>
        </TouchableOpacity>

        {/* add comment  */}
        <AddComment item={item} />

        {/* time stamp  */}
        <Text style={styles.timestamp}>
          {TimeStamp({ timestamp: item.timestamp })}
        </Text>
        <Modal
          visible={isCommentOpen}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setCommentOpen(false)}
        >
          <View style={styles.modelContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* mapping comment  */}
              {item.comments.map((comment, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  postImage: {
    marginVertical: 8,
    height: 400,
    // backgroundColor: "white",
  },
  addComment: {
    paddingTop: 10,
    paddingBottom: 5,
    flexDirection: "row",
  },

  modelContainer: {
    height: 500,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#272627",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  timestamp: { color: "gray", fontSize: 12 },
});
