import { Platform, StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopWidth: 0,

    height: Platform.OS === "ios" ? height(9.2) : height(9),
    backgroundColor: AppColors.white,

    paddingTop: Platform.OS == "android" ? height(0) : height(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 9.97,

    elevation: 15,
  },
  labelStyle: {
    fontSize: width(2.4),
    fontWeight: "700",
  },
  tab: {
    alignItems: "center",
  },
  focused: {
    height: Platform.OS === "ios" ? height(0.3) : height(0.3),
    width: Platform.OS === "ios" ? width(9) : width(8),
    marginTop: Platform.OS === "ios" ? height(1.12) : -height(0.2),
    backgroundColor: AppColors.base,
  },
  tabIcon: {
    height: height(3.5),
    width: width(5.5),
  },
  home: {
    marginTop: height(1.83),
    marginBottom: height(0.8),
  },
  label: {
    fontFamily: "Poppins-Regular",
    fontWeight: "500",
  },
});
export default styles;
