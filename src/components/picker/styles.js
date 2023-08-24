import {StyleSheet} from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
const styles = StyleSheet.create({
  container:{
    width:'100%',
    marginBottom:height(2)
  },
  pickerTextInput:{
    width:'100%',
    height:height(6),
    backgroundColor:AppColors.secondary,
    borderRadius:width(2),
    paddingLeft:width(2),
    color:AppColors.white,
    marginTop:height(0.5),
    placeholder:'sandalk'
  }
});

export default styles;