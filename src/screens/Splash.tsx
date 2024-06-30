import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import { Button } from "../components/Button/Button";

const FirstBtnEndIcon = require("../assets/icons/splash-r-btn-icon-blue.png");
const SecondBtnEndIcon = require("../assets/icons/splash-r-btn-icon-black.png");

const MailIcon = require("../assets/icons/mail-icon.png");
const SignInIcon = require("../assets/icons/login-icon.png");

const Splash: React.FC = () => {
  return (
    <ImageBackground
      source={require("../../assets/splash-image.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Soo</Text>
          <Text style={[styles.title, { marginTop: -20 }]}>and Carrots</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              position: "relative",
              width: "100%",
              justifyContent: "space-between",
            }}
            startIcon={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image source={SignInIcon} style={styles.startIcon} />
                <Text style={{ color: "white" }}>Sign up for free</Text>
              </View>
            }
            endIcon={<Image source={FirstBtnEndIcon} style={styles.endIcon} />}
            onPress={() => alert("Sign Up")}
          ></Button>
          <Button
            startIcon={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Image source={MailIcon} style={styles.startIcon} />
                <Text style={{ color: "white" }}>Continue with email</Text>
              </View>
            }
            onPress={() => alert("Sign Up")}
            style={{
              backgroundColor: "#1D2939",
              borderColor: "#1D2939",
              paddingHorizontal: 20,
              paddingVertical: 10,
              position: "relative",
              width: "100%",
              justifyContent: "space-between",
            }}
            endIcon={<Image source={SecondBtnEndIcon} style={styles.endIcon} />}
          ></Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    backgroundColor: "red",
    height: "100%",
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 88,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 0,
  },
  title: {
    fontSize: 36,
    color: "#fff",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 12,
  },
  endIcon: {
    width: 44,
    height: 44,
  },
  startIcon: {
    width: 15,
    height: 15,
  },
});
