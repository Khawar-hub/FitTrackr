import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {useDispatch} from 'react-redux';
import {DropDownMenu} from '~components';
import { persistor } from '~redux';
import {setIsLoggedIn, setUserMeta} from '~redux/slices/user';

const FilterModal = ({onPressFirstBtn,onPressSecondBtn,onPressThirdBtn}, ref) => {
  const dispatch = useDispatch();
  const [isVisible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    show: function () {
      setVisible(true);
    },
    hide: function () {
      setVisible(false);
    },
  }));

  return (
    <DropDownMenu
      isVisible={isVisible}
      firstBtnText="Today"
      secondBtnText="This Week"
      thirdText='This Month'
      onPressFirstBtn={onPressFirstBtn}
      onPressSecondBtn={onPressSecondBtn}
      onPressThirdBtn={onPressThirdBtn}
      onClose={() => setVisible(false)}
    />
  );
};
export default forwardRef(FilterModal);
