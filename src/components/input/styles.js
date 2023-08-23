import {StyleSheet} from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginBottom:height(2)
  },
  input:{
    backgroundColor:AppColors.secondary,
    height:height(6),
    borderRadius:width(2),
    paddingLeft:width(2),
    color:AppColors.white
  }
});

export default styles;