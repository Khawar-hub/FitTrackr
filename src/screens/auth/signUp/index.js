import { yupResolver } from "@hookform/resolvers/yup";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import {
  Button,
  Input,
  LargeText,
  ScreenWrapper,
  Spacer,
  UnderLineText,
} from "~components";
import { AppColors } from "~utils";
import { height } from "~utils/dimensions";
import styles from "./styles";
import LoginFormValidation, { SignUpFormValidation } from "./valdiation";
import ScreenNames from "~routes/routes";
import { Base64 } from "js-base64";
import { db } from "~index";
import { showToast } from "~utils/method";
export default function SignUp({ navigation }) {
  const passwordRef = useRef();
  const emailRef = useRef();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(SignUpFormValidation),
  });
  const checkIfTableExists = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='users';",
          [],
          (_, resultSet) => {
            if (resultSet.rows.length > 0) {
              resolve(true); // Table exists
            } else {
              resolve(false); // Table does not exist
            }
          },
          (_, error) => {
            reject(error);
          }
        );
      });
    });
  };
  const createTableUsers = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, encrypted_password TEXT);",
        [],
        () => {
          console.log('Table "users" created successfully.');
        },
        (_, error) => {
          console.error('Error creating table "users":', error);
        }
      );
    });
  };

  const signupHandler = async (data) => {
    console.log(data);
    // dispatch(setIsLoggedIn(true));
    try {
      const tableExists = await checkIfTableExists();
      if (!tableExists) {
        createTableUsers();
      }
      // Hash the password using bcrypt before storing
      const encrypted_password = Base64.encode(data?.password);

      db.transaction((tx) => {
        tx.executeSql(
          "INSERT INTO users (name, email, encrypted_password) VALUES (?, ?, ?);",
          [data?.name, data?.email, encrypted_password],
          (_, resultSet) => {
            // Handle success
            console.log("User signed up successfully.");
            showToast("success", "User signed up successfully.", "");
            reset();
            navigation?.goBack();
          },
          (_, error) => {
            // Handle error
            console.error("Error signing up:", error);
          }
        );
      });
    } catch (error) {
      console.error("Error encrypting password:", error);
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
            Create your account
          </LargeText>
          <Spacer vertical={height(2)} />
          <Input
            control={control}
            name="name"
            onSubmitEditing={() => emailRef?.current?.focus()}
            returnKeyType="next"
            label="Name"
          />
          <Input
            control={control}
            ref={emailRef}
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
          <Input
            ref={passwordRef}
            label={"Confirm Password"}
            control={control}
            name="confirmpassword"
            secureTextEntry
          />
          <UnderLineText
            onPress={() => navigation.navigate(ScreenNames.LOGIN)}
            color={AppColors.black}
            size={3.4}
            textAlign={"right"}
          >
            Login
          </UnderLineText>
        </View>
        <Spacer vertical={height(2)} />
        <Button
          disabled={!isValid}
          buttonTextColor={AppColors.white}
          withShadow
          onPress={handleSubmit(signupHandler)}
        >
          Sign Up
        </Button>
      </View>
    </ScreenWrapper>
  );
}
