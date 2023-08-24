import {yupResolver} from '@hookform/resolvers/yup';
import React, {useRef, useState} from 'react';
import {useForm} from 'react-hook-form';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Icons} from '~assets';
import {
  Button,
  Input,
  LargeText,
  ScreenWrapper,
  SmallText,
  Spacer,
  UnderLineText,
} from '~components';
import {setIsLoggedIn} from '~redux/slices/user';
import {AppColors} from '~utils';
import {height} from '~utils/dimensions';
import styles from './styles';
import LoginFormValidation from './valdiation';
import ScreenNames from '~routes/routes';
export default function Login({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(LoginFormValidation),
  });
  const loginHandler = async () => {
    dispatch(setIsLoggedIn(true));
  };

  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle={'light-content'}
      scrollEnabled
      >
      <View style={styles.mainViewContainer}>
        <LargeText textStyles={styles.heading}>FitTrackr</LargeText>

        <View style={styles.inputContainer}>
          <LargeText textAlign="center" size={5}>
            Sign in to your Account
          </LargeText>
          <Spacer vertical={height(2)} />
          <Input
            control={control}
            name="email"
            keyboardType={'email-address'}
            onSubmitEditing={() => passwordRef?.current?.focus()}
            returnKeyType="next"
            label="Email"
          />
          <Input
            ref={passwordRef}
            label={'Password'}
            control={control}
            name="password"
            secureTextEntry
          />
          <UnderLineText onPress={()=>navigation.navigate(ScreenNames.SIGNUPSCREEN)} color={AppColors.black} size={3.4} textAlign={'right'}>
            Sign up
          </UnderLineText>
        </View>
        <Spacer vertical={height(2)} />
        <Button
          disabled={!isValid}
          buttonTextColor={AppColors.white}
          withShadow
          onPress={handleSubmit(loginHandler)}>
          Login
        </Button>
      </View>
    </ScreenWrapper>
  );
}
