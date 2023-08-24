import Toast from "react-native-toast-message";
export const showToast = (type, title, description, position, onPress) => {


  Toast.show({
    type: type ?? "success",
    text1: title ?? "Hello",
    text2: description ?? "This is some something 👋",
    position: position ?? "top",
    onPress: onPress ?? null,
  });
};
