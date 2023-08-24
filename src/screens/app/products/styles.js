import {StyleSheet} from 'react-native';
import {AppColors} from '~utils';
import {height, width} from '~utils/dimensions';

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingVertical: height(2),
  },
  filter:{
    marginRight:width(6),
    marginBottom:height(1)
  }
  
});
export default styles;
