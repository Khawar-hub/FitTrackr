import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
    alignItems: "center",
    paddingVertical: height(5),
  },
  inputContainer: {
    width: width(85),

    marginVertical: height(2),
    backgroundColor: AppColors.white,
    elevation: 5,
    paddingVertical: height(2),
    paddingHorizontal: width(2),
    borderRadius: width(2),
  },
});
export default styles;
