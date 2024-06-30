import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FormInput } from "../components/Input";
import { Button } from "../components/Button/Button";
import { Yup, yupResolver } from "@/lib/yup";
import { useForm } from "@/lib/react-hook-form";
import { Checkbox } from "@/components/CheckBox";
import { CustomModal } from "@/components/WelcomeModal/Modal";
import { WelcomeModal } from "@/components/WelcomeModal/WelcomeModalContent";
import CompetitionScreen from "./Competition";

const BackIcon = require("../assets/icons/back-icon.png");
const ArrowDownIcon = require("../assets/icons/arrow-down.png");

// form's data type
interface IFormInput {
  email: string;
  competition: string;
  password: string;
  confirm_password: string;
  firstName: string;
  lastName: string;
  terms: boolean;
}

// Yup schema for validation
const schema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  competition: Yup.string().required("Competition is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  terms: Yup.bool().required(),
});

const SignUp: React.FC = () => {
  const { register, handleSubmit, control, setValue } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalTwo, setShowModalTwo] = useState<boolean>(false);

  const handleOnSubmit = (values: IFormInput) => {
    setShowModal(true);
  };

  const handleCompetitionSelection = (value: string) => {
    setValue("competition", value);
  };

  return (
    <>
      <CustomModal showModal={showModal} closable={false}>
        <WelcomeModal handleOnClose={() => setShowModal(false)} />
      </CustomModal>
      <CustomModal fullscreen={true} showModal={showModalTwo} closable={false}>
        <CompetitionScreen handleOnClick={handleCompetitionSelection} />
      </CustomModal>
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
            <Text style={styles.title}>Create Account</Text>
          </View>
          <View style={styles.inputsContainer}>
            <FormInput
              control={control}
              editable={false}
              onPress={() => setShowModalTwo(true)}
              rightIcon={
                <Image
                  source={ArrowDownIcon}
                  style={{ width: 24, height: 24 }}
                />
              }
              placeholder="Competition to sign up * "
              {...register("competition")}
            />

            <FormInput
              control={control}
              placeholder="Email *"
              {...register("email")}
            />
            <FormInput
              control={control}
              placeholder="Password *"
              {...register("password")}
            />
            <FormInput
              control={control}
              placeholder="Confirm password *"
              {...register("confirm_password")}
            />
            <FormInput
              control={control}
              placeholder="First name *"
              {...register("firstName")}
            />
            <FormInput
              control={control}
              placeholder="Last name *"
              {...register("lastName")}
            />
          </View>
          <View style={styles.termsContainer}>
            <Checkbox control={control} {...register("terms")} />
            <View>
              <Text style={styles.termsText}>
                By signing up, I agree to Cloit's 
                <Text style={{ textDecorationLine: "underline" }}>
                  Terms & Conditions
                </Text>
              </Text>
              <Text>
                and 
                <Text style={{ textDecorationLine: "underline" }}>
                  Privacy Policy
                </Text>
              </Text>
            </View>
          </View>
          <Button onPress={handleSubmit(handleOnSubmit)}>Sign Up</Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
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
    // fontWeight: 800,
    color: "#101828",
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
    marginVertical: 24,
  },
  termsText: { color: "#475467", lineHeight: 21 },
});

export default SignUp;
