import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  FilePickerModal,
  Header,
  ScreenWrapper,
  SettingModal,
  SmallText,
} from '~components';
import Avatar from '~components/avatar';
import {selectUserMeta} from '~redux/slices/user';
import styles from './styles';
import {AppColors, CommonStyles} from '~utils';
export default function Home() {
  //Ref
  const showSettingModalRef = useRef();
  const showImagePickerRef = useRef();
  //hooks
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  //States
  const [profilePicture, setProfilePicture] = useState(null);
  //useEffects
  //functions
  const pictureSelection = value => {
    setProfilePicture(value);
  };
  //jsx components
  return (
    <ScreenWrapper statusBarColor={AppColors.primary} barStyle="light-content">
      <Header>DEVELO IT SOLUTION</Header>
      <View style={styles.mainViewContainer}>
        <Avatar
          source={profilePicture ? {uri: profilePicture?.path} : null}
          showEdit
          onPress={() => showImagePickerRef?.current?.show()}
        />
        <View style={CommonStyles.marginTop_4}>
          <SmallText>{userInfo?.name}</SmallText>
          <SmallText>{userInfo?.email}</SmallText>
        </View>
        <Button
          variant="secondary"
          buttonTextColor={AppColors.white}
          onPress={() => {
            showSettingModalRef?.current?.show();
          }}>
          Settings
        </Button>
      </View>

      <SettingModal ref={showSettingModalRef} />
      <FilePickerModal
        ref={showImagePickerRef}
        onFilesSelected={pictureSelection}
      />
    </ScreenWrapper>
  );
}
