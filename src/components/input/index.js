import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import {SmallText} from '~components/text';
import {AppColors} from '~utils';
import styles from './styles';
const Input = (
  {
    onChangeText,
    value,
    error,
    inputStyle = {},
    containerStyle = {},
    placeholder,
    placeholderColor = AppColors.snowWhite,
    inputProps,
    keyboardType = 'default',
    onSubmitEditing,
    returnKeyType = 'default',
    secureTextEntry = false,
    control,
    name,
    label,
  },
  ref,
) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => {
        return (
          <View style={[styles.container, containerStyle]}>
            <SmallText size={3.5} color={AppColors.primary}>
              {label}
            </SmallText>
            <TextInput
              ref={ref}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              style={[styles.input, inputStyle]}
              onChangeText={onChange}
              value={value}
              blurOnSubmit={false}
              keyboardType={keyboardType}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType}
              secureTextEntry={secureTextEntry}
              {...inputProps}
              onBlur={onBlur}
            />
            {Boolean(error) ? (
              <SmallText color={AppColors.red} size={3}>
                *{error.message}
              </SmallText>
            ) : (
              <View />
            )}
          </View>
        );
      }}
    />
  );
};

export default forwardRef(Input);
