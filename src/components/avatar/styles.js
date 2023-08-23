import {StyleSheet} from 'react-native';
import { AppColors } from '~utils';
import { width ,height} from '~utils/dimensions';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(100),
    borderColor: AppColors.white,
    backgroundColor: AppColors.snowWhite,
  },
  primaryContainer: {
    borderWidth: 0,
  },
  secondaryContainer: {
    borderWidth: width(1),
    borderColor: AppColors.primary10,
  },
  editButton: {
    position: 'absolute',
    right: width(10),
    top: height(5),
  },
});

export default styles;
