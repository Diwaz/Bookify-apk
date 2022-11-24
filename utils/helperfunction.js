import Toast from 'react-native-toast-message';

const showError = (message) => {
    Toast.show({
        type: 'error',
        text1: message,
        // text2: 'This is some something '
    });
}

const showSuccess = (message) => {
    Toast.show({
        type: 'success',
        text1: message,
        text2: 'Happy Reading'
    });
}
const showCart = (message) => {
    Toast.show({
        type: 'success',
        text1: message,
        text2: 'Added to Cart'
    });
}

export {
    showError,
    showSuccess,
    showCart
}