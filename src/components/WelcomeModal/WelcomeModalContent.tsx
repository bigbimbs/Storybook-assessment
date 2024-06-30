import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "../Button";

const ModalHeaderBlueIcon = require("../../assets/icons/modal-header-icon.png");
const CloseIcon = require("../../assets/icons/close-icon.png");

type WelcomeModalProps = {
  handleOnClose: () => void;
};

export const WelcomeModal: React.FC<WelcomeModalProps> = ({
  handleOnClose,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={ModalHeaderBlueIcon} style={{ width: 52, height: 52 }} />
        <TouchableOpacity
          style={{
            borderRadius: 48,
            width: 50,
            height: 50,
            borderColor: "#D0D5DD",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 0,
            borderWidth: 1,
          }}
          onPress={handleOnClose}
        >
          <Image source={CloseIcon} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>Welcome to Soo</Text>
        <Text>Great to have you with us!</Text>
      </View>
      <Button onPress={handleOnClose}>Got it</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "white",
    minWidth: 300,
    gap: 48,
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "800",
    fontSize: 24,
    color: "#101828",
    lineHeight: 30,
  },
  paragraphText: {
    fontSize: 18,
    lineHeight: 27,
    color: "#101828",
  },
});
