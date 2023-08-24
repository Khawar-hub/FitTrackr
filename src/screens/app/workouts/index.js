import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header, ScreenWrapper, SettingModal, WorkoutItem } from "~components";
import styles from "./styles";
import { AppColors, CommonStyles } from "~utils";
import { db } from "~index";
import { selectWorkout, setAllWorkout } from "~redux/slices/workouts";
import { useGetWorkOutMutation } from "~rtk/get-workouts-API";
export default function WorkOuts({ navigation }) {
  const reduxWorkouts = useSelector(selectWorkout);
  const [loader, setLoader] = useState(false);
  //Ref
  const dispatch = useDispatch();
  const showSettingModalRef = useRef();
  const [getWorkoutAPI]=useGetWorkOutMutation()

  //States

  //jsx components
  useEffect(() => {
    getWorkouts();
  }, []);
  const getWorkouts = async() => {
    try {
      setLoader(true);
      const resp = await getWorkoutAPI();
      console.log(resp);

    } catch (e) {
      setLoader(false);
      console.log("Error getting workouts");
    }
  };

  const renderWorkouts = ({ item, _ }) => {
    return <WorkoutItem item={item} />;
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header showIcons={false}>API WorkOuts</Header>
      <View style={styles.mainViewContainer}>
        {/* <FlatList
          data={reduxWorkouts}
          renderItem={renderWorkouts}
          keyExtractor={(_, index) => index?.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={loader}
          onRefresh={getWorkouts}
        /> */}
      </View>

      <SettingModal ref={showSettingModalRef} />
    </ScreenWrapper>
  );
}
