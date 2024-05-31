import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
  PanResponder,
  Dimensions,
  Pressable,
} from "react-native";
import { users } from "../../data/User.js";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;

const Stories = () => {
  const [activeStory, setActiveStory] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef(null);
  const holdRef = useRef(false);
  const translateX = useRef(new Animated.Value(0)).current;
  const storyProgress = useRef(users.map(() => new Animated.Value(0))).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx > windowWidth / 2) {
          nextStory();
        } else if (gestureState.dx < -(windowWidth / 2)) {
          prevStory();
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Reset gesture state
        console.log("here");
        gestureState.dx = 0;
      },
    })
  ).current;

  const startRotation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  };

  const handleStoryPress = (index) => {
    setActiveStory(index);
    startRotation();
    setIsModalVisible(true);
    startAutoPlay();
  };

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!holdRef.current) {
        nextStory();
      }
    }, 5000);
  };

  const nextStory = () => {
    setActiveStory((prevIndex) => {
      const nextIndex = (prevIndex + 1) % users.length;
      if (nextIndex === 0) {
        clearInterval(intervalRef.current);
        setIsModalVisible(false);
        rotateValue.setValue(0);
        resetProgress();
        return prevIndex;
      }
      return nextIndex;
    });
  };

  const prevStory = () => {
    setActiveStory((prevIndex) => {
      const nextIndex = (prevIndex - 1 + users.length) % users.length;
      return nextIndex;
    });
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setActiveStory(null);
    rotateValue.setValue(0);
    resetProgress();
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const handlePressIn = () => {
    holdRef.current = true;
    clearInterval(intervalRef.current);
  };

  const handlePressOut = () => {
    holdRef.current = false;
    startAutoPlay();
  };

  const handleModalTap = () => {
    console.log("true");
    nextStory();
  };

  const renderProgressBar = (index) => {
    const duration = 5000; // Assuming each story lasts for 5 seconds
    const progress = storyProgress[index].interpolate({
      inputRange: [0, duration],
      outputRange: ["0%", "100%"],
    });

    return <Animated.View style={[styles.progressBar, { width: progress }]} />;
  };

  const animateProgress = () => {
    if (activeStory !== null) {
      Animated.timing(storyProgress[activeStory], {
        toValue: 5000, // 100% width in 5000ms
        duration: 5000,
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    animateProgress();
  }, [activeStory]);

  const resetProgress = () => {
    storyProgress.forEach((progress) => {
      progress.setValue(0);
    });
  };

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      >
        {users.map((user, index) => (
          <View key={index} style={styles.story}>
            <TouchableOpacity onPress={() => handleStoryPress(index)}>
              <View style={styles.storyStroke}>
                <Animated.View
                  style={{
                    transform: activeStory === index ? [{ rotate }] : [],
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  }}
                >
                  <LinearGradient
                    colors={[
                      "#feda75",
                      "#fa7e1e",
                      "#d62976",
                      "#962fbf",
                      "#4f5bd5",
                    ]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientWrapper}
                  />
                </Animated.View>
                <Image
                  source={{ uri: user.profile_pic }}
                  style={styles.profilePic}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.username}>{user.username}</Text>
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={handleModalClose}
      >
        <Pressable
          style={styles.modalContainer}
          onTouchStart={handlePressIn}
          onTouchEnd={handlePressOut}
          onPress={handleModalTap}
          {...panResponder.panHandlers}
        >
          {activeStory !== null && (
            <Animated.View
              style={[
                styles.modalImageWrapper,
                { transform: [{ translateX }] },
              ]}
            >
              <Image
                source={{ uri: users[activeStory].profile_pic }}
                style={styles.modalImage}
                resizeMode="cover"
              />
              <View style={styles.overlay}>
                <Image
                  source={{ uri: users[activeStory].profile_pic }}
                  style={styles.profileImg}
                />
                <View>
                  <Text style={styles.usernameText}>
                    {users[activeStory].username || "lul"}
                    <Text style={styles.timeText}> • 1hr ago</Text>
                  </Text>
                  <Text style={styles.nameText}>
                    {users[activeStory].name || "Lol"}
                  </Text>
                </View>
              </View>
              {renderProgressBar(activeStory)}
            </Animated.View>
          )}
        </Pressable>
      </Modal>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    maxHeight: 120,
    // backgroundColor: "red",
  },
  storyStroke: {
    width: 75,
    height: 75,
    borderRadius: 40,
    overflow: "hidden",
    borderColor: "transparent",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  gradientWrapper: {
    width: "100%",
    height: "100%",
    padding: 3,
  },
  story: {
    alignItems: "center",
    padding: 5,
    height: 150,
  },
  profilePic: {
    width: "92%",
    height: "92%",
    borderRadius: 40,
  },
  username: {
    marginTop: 5,
    fontWeight: "600",
    color: "white",
    fontSize: 13,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImageWrapper: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    position: "absolute",
    top: 16,
    left: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  usernameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  timeText: {
    fontSize: 13,
    color: "#bbb",
  },
  nameText: {
    color: "white",
    fontSize: 14,
  },
  progressBar: {
    position: "absolute",
    margin: 4,
    top: 0,
    left: 0,
    height: 3,
    borderRadius: 10,
    backgroundColor: "white", // Adjust opacity as needed
  },
});
