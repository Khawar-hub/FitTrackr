import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { SmallText } from "~components/text";
import FastImage from "react-native-fast-image";
export default function ProductItem({ item, onPressItem }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPressItem}
      style={styles.container}
    >
      <FastImage
        resizeMode="cover"
        style={styles.image}
        source={{ uri: item?.thumbnail }}
      />

      <View style={styles.infoSection}>
        <View style={styles.row}>
          <SmallText textStyles={styles.text}>Price: {item.price}</SmallText>
          <SmallText textStyles={styles.text}>
            Category: {item.category}
          </SmallText>
          <SmallText textStyles={styles.text}>Brand: {item.brand}</SmallText>
        </View>
        <View style={styles.row}>
          <SmallText textStyles={styles.text}>Title: {item.title}</SmallText>
          <SmallText textStyles={styles.text}>Stock: {item.stock}</SmallText>
          <SmallText textStyles={styles.text}>Rating: {item.rating}</SmallText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
