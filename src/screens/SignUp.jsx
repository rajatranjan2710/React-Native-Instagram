import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ig from "../../assets/ig.png"; // Make sure the path to the image is correct
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      colors={["#242124", "#1e1b2e", "#000000"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.languageText}>English (India)</Text>
        <Image source={ig} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginRedirect}
          onPress={() => navigation.navigate("login")}
        >
          <Text style={styles.loginRedirectText}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Meta</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  languageText: {
    position: "absolute",
    top: 50,
    color: "#fff",
    fontSize: 14,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: "#fff",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#3897f0",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginRedirect: {
    marginTop: 20,
    borderColor: "#3897f0",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  loginRedirectText: {
    color: "#3897f0",
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    color: "#fff",
  },
});

export default SignUp;
