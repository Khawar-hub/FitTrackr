import React from "react";
import { ActivityIndicator, Text, View, Image } from "react-native";
import styles from "./styles";
import { SmallText } from "~components/text";
export default function WorkoutItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
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
