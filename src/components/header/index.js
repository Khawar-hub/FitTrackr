import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { Icons } from "~assets";
import { SmallText } from "~components/text";
import { AppColors } from "~utils";
import { height, width } from "~utils/dimensions";

const Header = ({
  children = "",
  containerStyle,
  onPressAddIcon,
  onPressLogout,
  showIcons=true,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <SmallText textStyles={styles.header_title} color={AppColors.white}>{children}</SmallText>
      {showIcons&&
      <View style={styles.row}>
        <TouchableOpacity onPress={onPressAddIcon}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={Icons.addicon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressLogout}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={Icons.logout}
          />
        </TouchableOpacity>
      </View>
}
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    width: width(100),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: width(5),
    paddingVertical: height(3),
  },
  icon: {
    height: height(3),
    width: width(10),
    tintColor: "white",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  header_title:{
    fontWeight:'700',
    fontSize:width(6)
  }
});
