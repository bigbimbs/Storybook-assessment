import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CompetitionCardProps = {
  title: string;
  description: string;
  date: string;
  background?: "One" | "Two";
};

export const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  description,
  background,
  date,
}) => {
  return (
    <View
      style={[
        styles.card,
        background === "Two" ? styles.backgroundTwo : styles.backgroundOne,
      ]}
    >
      <Text style={styles.title}>{title ?? "No Title"}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 24,

    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#253BFF",
    borderRadius: 16,
  },
  backgroundOne: { backgroundColor: "#253BFF" },
  backgroundTwo: {
    backgroundColor: "#4C53FF",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    lineHeight: 27,
  },
  date: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    marginVertical: 8,
  },
  description: {
    fontSize: 14,
    color: "#B8BFFF",
    fontWeight: "500",
  },
});
