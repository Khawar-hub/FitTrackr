import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import { AppColors } from '~utils';
import { width } from '~utils/dimensions';

export const LargeText = ({
  children = '',
  color = AppColors.black,
  textStyles = {},
  size = 6.5,
  textAlign = 'auto',
  textProps,
  onPress = undefined,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};

export const MediumText = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.black,
  textStyles,
  textProps,
  onPress = undefined,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const SmallText = ({
  children = '',
  size = 4,
  textAlign,
  color = AppColors.black,
  textStyles,
  textProps,
  onPress = undefined,
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
export const UnderLineText = ({
  children = '',
  size = 4.5,
  textAlign,
  color = AppColors.black,
  textStyles,
  textProps,
  onPress = undefined,
  textDecorationLine = 'underline',
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: width(size),
      color: color,
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
    },
  });
  return (
    <Pressable disabled={typeof onPress == 'undefined'} onPress={onPress}>
      <Text style={[styles.text, textStyles]} {...textProps}>
        {children}
      </Text>
    </Pressable>
  );
};
