import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FilePickerModal,
  Header,
  ScreenWrapper,
  SettingModal,
  SmallText,
  WorkoutItem,
} from "~components";
import Avatar from "~components/avatar";
import { selectUserMeta } from "~redux/slices/user";
import styles from "./styles";
import { AppColors, CommonStyles } from "~utils";
import ScreenNames from "~routes/routes";
import { workoutTypes } from "~utils/dummy-data";
import { db } from "~index";
import { selectWorkout, setAllWorkout } from "~redux/slices/workouts";
export default function Home({ navigation }) {
  const reduxWorkouts = useSelector(selectWorkout);
  const[loader,setLoader]=useState(false)
  //Ref
  const dispatch = useDispatch();
  console.log(reduxWorkouts,'====');
  const showSettingModalRef = useRef();

  //States

  //jsx components
  useEffect(() => {
    getWorkouts();
  }, []);
  const getWorkouts = () => {
    try {
      setLoader(true)
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM workouts", [], (_, { rows }) => {
          // Process the query results and update state
          setLoader(false)
          dispatch(setAllWorkout(rows.raw()?.reverse()));
        });
      });
    } catch (e) {
      setLoader(false)
      console.log("Error getting workouts");
    }
  };
  const renderWorkouts = ({ item, _ }) => {
    return <WorkoutItem item={item} />;
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header
        onPressAddIcon={() => navigation.navigate(ScreenNames.ADDWORKOUT)}
        onPressLogout={() => showSettingModalRef?.current?.show()}
      >
        WorkOuts
      </Header>
      <View style={styles.mainViewContainer}>
        <FlatList
          data={reduxWorkouts}
          renderItem={renderWorkouts}
          keyExtractor={(_, index) => index?.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={loader}
          onRefresh={getWorkouts}
        />
      </View>

      <SettingModal ref={showSettingModalRef} />
    </ScreenWrapper>
  );
}
