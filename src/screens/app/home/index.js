import React, { useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FilePickerModal,
  FilterModal,
  Header,
  ScreenWrapper,
  SettingModal,
  SmallText,
  UnderLineText,
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
import moment from "moment";
export default function Home({ navigation }) {
  const [selectedFilter, setSelectedFilter] = useState(null); // State for the selected filter
  const [filteredWorkouts, setFilteredWorkouts] = useState([]); // State for filtered workouts
  const reduxWorkouts = useSelector(selectWorkout);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const showSettingModalRef = useRef();
  const filterModalRef = useRef();
  useEffect(() => {
    getWorkouts();
  }, []);
  const getWorkouts = () => {
    try {
      setLoader(true);
      db.transaction((tx) => {
        tx.executeSql("SELECT * FROM workouts", [], (_, { rows }) => {
          // Process the query results and update state
          setLoader(false);
      
          dispatch(setAllWorkout(rows.raw()));
        });
      });
    } catch (e) {
      setLoader(false);
      console.log("Error getting workouts");
    }
  };
  const applyFilter = (filterType) => {
    setSelectedFilter(filterType);

    // Filter the workouts based on the selected filter
    let filteredData = [];
    if (filterType === "today") {
      filteredData = reduxWorkouts.filter((workout) =>
        moment(workout.createdAt).isSame(moment(), "day")
      );
    } else if (filterType === "thisWeek") {
      filteredData = reduxWorkouts.filter((workout) =>
        moment(workout.createdAt).isBetween(
          moment().startOf("week"),
          moment().endOf("week"),
          "day",
          "[]"
        )
      );
    } else if (filterType === "thisMonth") {
      filteredData = reduxWorkouts.filter((workout) =>
        moment(workout.createdAt).isSame(moment(), "month")
      );
    }
    setFilteredWorkouts(filteredData);
    filterModalRef?.current?.hide();
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
        <UnderLineText
          onPress={
            selectedFilter == null
              ? () => filterModalRef?.current?.show()
              : () => setSelectedFilter(null)
          }
          textAlign={"right"}
          textStyles={styles.filter}
        >
          {selectedFilter ? "Remove Filter" : "Filter"}
        </UnderLineText>
        <FlatList
          data={selectedFilter ? filteredWorkouts : reduxWorkouts}
          renderItem={renderWorkouts}
          keyExtractor={(_, index) => index?.toString()}
          showsVerticalScrollIndicator={false}
          refreshing={loader}
          onRefresh={getWorkouts}
        />
      </View>

      <SettingModal ref={showSettingModalRef} />
      <FilterModal
        ref={filterModalRef}
        onPressFirstBtn={() => applyFilter("today")} // Apply the filter based on the button pressed
        onPressSecondBtn={() => applyFilter("thisWeek")}
        onPressThirdBtn={() => applyFilter("thisMonth")}
      />
    </ScreenWrapper>
  );
}
