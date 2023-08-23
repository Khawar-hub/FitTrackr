import {StyleSheet} from 'react-native';
import { AppColors } from '~utils';
import { height } from '~utils/dimensions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  scroll: {
    flex: 1,
    paddingBottom: height(1.5),
  },
  contentContainer: {
    flex: 1,
  },
});
export default styles;
