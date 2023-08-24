import { StyleSheet } from "react-native";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    width: width(90),
    borderColor: AppColors.wihte5,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: width(3),

    marginBottom: height(2),
  },
  image: {
    height: height(25),
    width: width(90),
    borderRadius: width(2),
  },
  infoSection: {
    height: height(14),
    width: width(90),
    justifyContent: "space-between",
    paddingVertical: height(1),

    borderRadius: width(2),
    backgroundColor: AppColors.primary,
  },
  text: {
    fontSize: width(3),
    color: AppColors.white,
    fontWeight: "600",
  },
  dotsView: {
    height: height(4),
    width: "auto",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",

    flexDirection: "row",
  },
  dot: {
    height: width(2.3),
    width: width(2.3),
    borderRadius: width(8),
    marginRight: width(1.5),
  },
  row: {
    width: width(90),
    height: height(4),
    justifyContent: "space-between",
    paddingHorizontal: width(2),
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: width(3.3),
    fontWeight: "700",
  },
});
export default styles;
