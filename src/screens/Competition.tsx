import { Button } from "@/components/Button";
import { CompetitionCard } from "@/components/CompetitionCard";
import { FormInput } from "@/components/Input";
import { Yup, yupResolver } from "@/lib/yup";
import { useForm } from "@/lib/react-hook-form";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const BackIcon = require("../assets/icons/back-icon.png");
const SearchIcon = require("../assets/icons/search-icon.png");

const data: { title: string; description: string; date: string }[] = [
  {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
  {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
  {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
  {
    title: "20th Asian Game - Achi Nagoya 2026 (Winter)",
    description: "YYYY-MM-DD ~ YYYY-MM-DD",
    date: "Pyeongchang, Gangwon-do, Korea",
  },
];

// form's data type
interface IFormInput {
  search: string;
}

// Yup schema for validation
const schema = Yup.object().shape({
  search: Yup.string().required("Search is required"),
});

type CompetitionScreenProps = {
  handleOnClick: (value: string) => void;
};

const CompetitionScreen: React.FC<CompetitionScreenProps> = ({
  handleOnClick,
}) => {
  const { register, handleSubmit, control, setValue } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
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
          >
            <Image source={BackIcon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
          <View>
            <FormInput
              style={{ backgroundColor: "#F9FAFB" }}
              control={control}
              {...register("search")}
              placeholder="Asian"
            />
          </View>
        </View>
        <Text style={styles.title}>Competition</Text>
        <Text style={styles.desc}>
          An account is needed per one host. If you already have an account for
          the host of competition you want to sign up, you can login and
          register.
        </Text>
        <View style={styles.cardContainer}>
          {data.map((_, index) => (
            <TouchableOpacity
              key={`competition-${index}`}
              activeOpacity={7}
              onPress={() => handleOnClick(_.title)}
            >
              <CompetitionCard
                title={_.title}
                description={_.description}
                date={_.date}
                background={index % 2 === 0 ? "Two" : "One"}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CompetitionScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingTop: 16,
    paddingBottom: 100,
    paddingHorizontal: 25,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#101828",
  },
  desc: {
    color: "#344054",
    marginTop: 8,
  },
  errorText: {
    marginTop: 8,
    color: "#FF2323",
    lineHeight: 14,
  },
  inputsContainer: { flexDirection: "column", gap: 8 },
  termsContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
    marginBottom: 24,
  },
  termsText: { color: "#475467", lineHeight: 21 },
  cardContainer: {
    flexDirection: "column",
    gap: 16,
    marginTop: 24,
  },
});
