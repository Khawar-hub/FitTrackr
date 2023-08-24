import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { SmallText } from "~components/text";
import FastImage from "react-native-fast-image";
export default function WorkoutItem({ item }) {
  return (
    <View style={styles.container}>
      <FastImage
        source={{ uri: item?.image }}
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.infoSection}>
        <SmallText textStyles={styles.text}>
          Workout Type: {item?.type}
        </SmallText>
        <SmallText textStyles={styles.text}>
          Distance: {item?.distance}
        </SmallText>
        <SmallText textStyles={styles.text}>
          Duration: {item?.duration}
        </SmallText>
        <SmallText textStyles={styles.text}>
          Repititions: {item?.repititions}
        </SmallText>
      </View>
    </View>
  );
}
