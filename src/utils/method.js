import { showMessage } from 'react-native-flash-message';

// export  debounce(func, wait, immediate) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }
 const successMessage = (description = '', message = 'Success') => {
  showMessage({
    message: message,
    description: description,
    type: 'success',
  });
};
 const errorMessage = (description = '', message = 'Error') => {
  showMessage({
    message: message,
    description: description,
    type: 'danger',
  });
};
 const toastMessage = (
  description = '',
  message = 'Info',
  type = 'info',
) => {
  showMessage({
    message: message,
    description: description,
    type: type,
  });
};
 const GlobalMethods={toastMessage,errorMessage,successMessage}
 export default GlobalMethods