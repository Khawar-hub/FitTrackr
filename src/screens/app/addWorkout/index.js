import React, { useRef, useState } from "react";
import { View } from "react-native";
import {
  Button,
  FilePickerModal,
  Header,
  Input,
  LargeText,
  Picker,
  ScreenWrapper,
  SettingModal,
  SmallText,
  Spacer,
} from "~components";
import Avatar from "~components/avatar";
import styles from "./styles";
import { AppColors, CommonStyles } from "~utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddWorkoutFormValidation } from "~screens/auth/signUp/valdiation";
import { height } from "~utils/dimensions";
import { showToast } from "~utils/method";
import { db } from "~index";
import { useDispatch, useSelector } from "react-redux";
import { selectWorkout, setWorkouts } from "~redux/slices/workouts";
import moment from "moment";
export default function AddWorkout({ navigation }) {
  //Ref
  const reduxWorkouts = useSelector(selectWorkout);
  const showSettingModalRef = useRef();
  const showImagePickerRef = useRef();
  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  //hooks
  //States
  const [profilePicture, setProfilePicture] = useState(null);
  //useEffects
  //functions
  const pictureSelection = (value) => {
    setProfilePicture(value);
  };
  const distanceRef = useRef();
  const durationRef = useRef();
  const repititionsRef = useRef();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(AddWorkoutFormValidation),
  });
  const checkIfTableExists = () => {
    return new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='workouts';",
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
        "CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY AUTOINCREMENT,image TEXT, type TEXT, duration TEXT,distance TEXT,repititions TEXT, createdAt INTEGER);",
        [],
        () => {
          console.log('Table "workouts" created successfully.');
        },
        (_, error) => {
          console.error('Error creating table "users":', error);
        }
      );
    });
  };
  const addWorkout = async (data) => {
    if (!profilePicture) {
      showToast("error", "Please add an image", "");
    } else if (!type || type === "null") {
      showToast("error", "Please select workout type", "");
    } else {
      try {
        const tableExists = await checkIfTableExists();
        if (!tableExists) {
          createTableUsers();
        }

        db.transaction((tx) => {
          tx.executeSql(
            "INSERT INTO workouts (image,type, duration, distance, repititions,createdAt) VALUES (?,?, ?, ?, ?,?);",
            [
              profilePicture?.path,
              type,
              data?.duration,
              data?.distance,
              data?.repititions,
              moment().valueOf()
            ],
            (_, resultSet) => {
              // Handle success
              console.log("workout created successfully.");

              dispatch(
                setWorkouts({
                  image: profilePicture?.path,
                  type: type,
                  duration: data?.duration,
                  distance: data?.distance,
                  repititions: data?.repititions,
                  createdAt: moment().valueOf()
                })
              );
              showToast("success", "Workout created successfully.", "");
              reset();
              navigation?.goBack();
            },
            (_, error) => {
              // Handle error
              console.error("Error add workout:", error);
            }
          );
        });
      } catch (error) {
        console.error(":", error);
      }
    }
  };
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.primary}
      barStyle="light-content"
    >
      <Header showIcons={false}>Add Workout</Header>
      <View style={styles.mainViewContainer}>
        <Avatar
          source={profilePicture ? { uri: profilePicture?.path } : null}
          showEdit
          onPress={() => showImagePickerRef?.current?.show()}
        />
        <View style={styles.inputContainer}>
          <LargeText textAlign="center" size={5}>
            Add your Workout
          </LargeText>
          <Spacer vertical={height(2)} />
          <Picker
            returnKeyType="next"
            onChange={(value) => setType(value)}
            value={type}
            label="Workout Type *"
          />

          <Input
            control={control}
            ref={distanceRef}
            name="distance"
            keyboardType="numeric"
            onSubmitEditing={() => durationRef?.current?.focus()}
            returnKeyType="next"
            label="Distance *"
          />
          <Input
            ref={durationRef}
            label={"Duration *"}
            keyboardType="numeric"
            onSubmitEditing={() => repititionsRef?.current?.focus()}
            control={control}
            name="duration"
          />
          <Input
            ref={repititionsRef}
            label={"Repititions *"}
            keyboardType="numeric"
            control={control}
            name="repititions"
          />
        </View>
        <Button
          disabled={!isValid}
          buttonTextColor={AppColors.white}
          withShadow
          onPress={handleSubmit(addWorkout)}
        >
          Add Workout
        </Button>
      </View>

      <SettingModal ref={showSettingModalRef} />
      <FilePickerModal
        ref={showImagePickerRef}
        onFilesSelected={pictureSelection}
      />
    </ScreenWrapper>
  );
}
