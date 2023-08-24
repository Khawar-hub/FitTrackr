import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Header, ScreenWrapper, SettingModal, WorkoutItem } from "~components";
import { selectWorkout } from "~redux/slices/workouts";
import { useGetWorkOutQuery } from "~rtk/get-workouts-API";
import { AppColors } from "~utils";
import styles from "./styles";
export default function WorkOuts({ navigation }) {
  const reduxWorkouts = useSelector(selectWorkout);
  const [loader, setLoader] = useState(false);
  //Ref
  const dispatch = useDispatch();
  const showSettingModalRef = useRef();
  const { data, error, fetching, isLoading } = useGetWorkOutQuery()

  //States
  console.log(data);
  //jsx components
  // useEffect(() => {
  //   getWorkouts();
  // }, []);
  // const getWorkouts = async() => {
  //   try {
  //     setLoader(true);
  //     const resp = await getWorkoutAPI();
  //     console.log(resp);

  //   } catch (e) {
  //     setLoader(false);
  //     console.log("Error getting workouts");
  //   }
  // };

  const renderWorkouts = ({ item, _ }) => {
    return <WorkoutItem item={item} />;
  };
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header showIcons={false}>API WorkOuts</Header>
      <View style={styles.mainViewContainer}>
        <FlatList
          data={data !== undefined ? data?.products : []}
          renderItem={renderWorkouts}
          keyExtractor={(_, index) => index?.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={isLoading}
        />
      </View>

      <SettingModal ref={showSettingModalRef} />
    </ScreenWrapper>
  );
}
