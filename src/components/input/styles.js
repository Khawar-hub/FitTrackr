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
    fontWeight:'500',
    borderRadius:width(2),
    marginTop:height(0.5),
    paddingLeft:width(2),
    color:AppColors.white
  }
});

export default styles;