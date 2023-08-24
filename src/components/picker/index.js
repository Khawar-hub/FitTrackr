import React, { forwardRef } from "react";
import { View } from "react-native";
import { Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";
import { AppColors } from "~utils";
import styles from "./styles";
import { workoutTypes } from "~utils/dummy-data";
import { SmallText } from "~components/text";
const Picker = ({ value, onChange, label }, ref) => {
  return (
    <View style={styles.container}>
      <SmallText size={3.5} color={AppColors.primary}>
        {label}
      </SmallText>
      <RNPickerSelect
        ref={ref}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Choose your workout type", value: "null" }}
        onValueChange={onChange}
        items={workoutTypes}
        textInputProps={styles.pickerTextInput}
        value={value}
      />
    </View>
  );
};

export default forwardRef(Picker);
