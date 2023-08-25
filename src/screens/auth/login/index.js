import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import {
  Button,
  Input,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
  UnderLineText,
} from "~components";
import { setIsLoggedIn, setUserMeta } from "~redux/slices/user";
import { AppColors } from "~utils";
import BcryptReactNative from "bcrypt-react-native";
import { height } from "~utils/dimensions";
import styles from "./styles";
import LoginFormValidation from "./valdiation";
import ScreenNames from "~routes/routes";
import { db } from "~index";
import { Base64 } from "js-base64";
import { showToast } from "~utils/method";
export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(LoginFormValidation),
  });

  const loginHandler = async (data) => {
    try {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT * FROM users WHERE email = ?;",
          [data?.email],
          async (_, resultSet) => {
            const user = resultSet.rows.item(0);

            if (user) {
              const storedEncodedPassword = user?.encrypted_password; // Replace with the actual field name

              // Decode the stored encoded password
              const isSame = await BcryptReactNative.compareSync(
                data?.password,
                storedEncodedPassword
              );

              // Compare the decoded stored password with the entered password
              if (isSame) {
                // Password matches, user is logged in
                // Set a logged-in state and navigate the user
                console.log("Logged in successfully.");
                showToast("success", "Logged in successfully.", "");
                dispatch(setUserMeta(user));
                dispatch(setIsLoggedIn(true));
              } else {
                console.log("Incorrect password.");
                showToast("error", "Incorrect Password.", "");
              }
            } else {
              console.log("User not found.");
              showToast("error", "User not found", "");
            }
          }
        );
      });
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle={"light-content"}
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <LargeText textStyles={styles.heading}>FitTrackr</LargeText>

        <View style={styles.inputContainer}>
          <LargeText textAlign="center" size={5}>
            Sign in to your Account
          </LargeText>
          <Spacer vertical={height(2)} />
          <Input
            control={control}
            name="email"
            keyboardType={"email-address"}
            onSubmitEditing={() => passwordRef?.current?.focus()}
            returnKeyType="next"
            label="Email"
          />
          <Input
            ref={passwordRef}
            label={"Password"}
            control={control}
            name="password"
            secureTextEntry
          />
          <UnderLineText
            onPress={() => navigation.navigate(ScreenNames.SIGNUPSCREEN)}
            color={AppColors.black}
            size={3.4}
            textAlign={"right"}
          >
            Sign up
          </UnderLineText>
        </View>
        <Spacer vertical={height(2)} />
        <Button
          disabled={!isValid}
          buttonTextColor={AppColors.white}
          withShadow
          onPress={handleSubmit(loginHandler)}
        >
          Login
        </Button>
      </View>
    </ScreenWrapper>
  );
}
