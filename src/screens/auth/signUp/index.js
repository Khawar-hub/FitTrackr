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
import LoginFormValidation, { SignUpFormValidation } from './valdiation';
import ScreenNames from '~routes/routes';
export default function SignUp({navigation}) {
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const emailRef = useRef();
  const [name,setName]=useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm({
    mode: 'all',
    resolver: yupResolver(SignUpFormValidation),
  });
  const signupHandler = async (data) => {
    console.log(data);
    // dispatch(setIsLoggedIn(true));
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
            Create your account
          </LargeText>
          <Spacer vertical={height(2)} />
          <Input
            control={control}
            name="name"
            onSubmitEditing={() => emailRef?.current?.focus()}
            returnKeyType="next"
            label="Name"
          />
          <Input
            control={control}
            ref={emailRef}
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
            <Input
            ref={passwordRef}
            label={'Confirm Password'}
            control={control}
            name="confirmpassword"
            secureTextEntry
          />
          <UnderLineText onPress={()=>navigation.navigate(ScreenNames.LOGIN)}  color={AppColors.black} size={3.4} textAlign={'right'}>
            Login
          </UnderLineText>
        </View>
        <Spacer vertical={height(2)} />
        <Button
          disabled={!isValid}
          buttonTextColor={AppColors.white}
          withShadow
          onPress={handleSubmit(signupHandler)}>
          Sign Up
        </Button>
      </View>
    </ScreenWrapper>
  );
}
