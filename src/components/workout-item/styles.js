import { StyleSheet } from 'react-native';
import { AppColors } from '~utils';
import { height, width } from '~utils/dimensions';
const styles = StyleSheet.create({
    container: {
        backgroundColor: AppColors.primary,
        width: width(90),
        borderWidth:1,
        borderColor:AppColors.wihte5,
        paddingVertical: height(1),
        justifyContent: 'space-between',
        paddingHorizontal:width(3),
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: width(3),
        flexDirection: 'row',
        
        marginBottom:height(2)
    },
    image:{
        height:height(15),
        width:width(30),
    },
    infoSection:{
       height:height(14),
       width:width(50) ,
       justifyContent:'space-between',
       paddingVertical:height(1)
    },
    text:{
        fontSize:width(3),
        color:AppColors.white,
        fontWeight:'600'
    }
    
  
});
export default styles;
