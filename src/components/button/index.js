import React, {useMemo} from 'react';
import {TouchableOpacity} from 'react-native';
import {SmallText} from '~components';
import AppColors from '~utils/app-colors';
import styles from './styles';

const Button = ({
  onPress,
  children = 'Button',
  variant = 'primary', //primary & secondary
  withShadow = false,
  containerStyle = {},
  touchableOpacityProps,
  textStyle = {},
  textProps = {},
  disabled = false,
  buttonTextColor = AppColors.white,
}) => {
  const getStyles = useMemo(() => {
    return {
      container: {
        ...styles.container,
        ...(disabled
          ? styles.disableContainer
          : variant === 'primary'
          ? styles.primaryContainer
          : styles.secondaryContainer),
        ...(withShadow && styles.shadow),
      },
    };
  }, [variant, withShadow, disabled]);

  return (
    <TouchableOpacity
      style={[getStyles.container, containerStyle]}
      onPress={onPress}
      disabled={disabled}
      {...touchableOpacityProps}>
      <SmallText
        color={disabled?AppColors.black:buttonTextColor}
        textStyles={textStyle}
        textProps={textProps}>
        {children}
      </SmallText>
    </TouchableOpacity>
  );
};

export default Button;
