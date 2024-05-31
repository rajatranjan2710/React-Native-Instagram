// import {
//   Image,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React from "react";

// import Header from "../components/Header";
// import Stories from "../components/Stories";
// import Post from "../components/Post";
// import { post } from "../../data/Post";

// const MainScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         {/* Header  */}
//         <Header />

//         {/* stories  */}
//         <Stories />

//         {/* posts */}
//         {post.map((item, index) => (
//           <Post key={index} item={item} />
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default MainScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000",
//     paddingTop: 40,
//   },
// });

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl, // Import RefreshControl
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform, // Import ActivityIndicator for loader
} from "react-native";
import React, { useState } from "react";

import Header from "../components/Header";
import Stories from "../components/Stories";
import Post from "../components/Post";
import { post } from "../../data/Post";

const MainScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Adjust the timeout as needed
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
      >
        {/* Header  */}
        <Header />

        {/* Loader */}
        {refreshing && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        )}

        {/* stories  */}
        <Stories />

        {/* posts */}
        {post.map((item, index) => (
          <Post key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 40,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
