import is from 'is_js';
import validator from 'is_js';

const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}
const confirmPassword = (val, key) => {
    if (val !== key) {
        return 'Password Error'
    } else {
        return '';
    }
}
const strongPassword = (val) => {
    let arrpassword = val.split('');
    let newarr = [];
    arrpassword.forEach((item, index) => {

        let newVal = parseInt(item);
        is.positive(newVal) ? newarr.push(parseInt(item)) : newarr.push(item);

    })
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let count = 0;
    newarr.forEach((item, indx) => {

        if (!isNaN(item * 1)) {
            count;
        } else {

            if (format.test(item)) {
                count;
            } else if (item == item.toUpperCase()) {
                count++;
            } else {
                count;
            }
        }

    })

    console.log(newarr, count)
    let checkCapital = count > 0 ? true : false;
    let checkNumber = is.any.positive(newarr);
    console.log(arrpassword, checkCapital, 'number', checkNumber);

    let checkSpecial = format.test(val);

    if (!checkSpecial) {
        return 'Use Atleast One special character'
    }
    if (!checkCapital) {
        return 'Use Atleast One capital letter';
    }
    if (!checkNumber) {
        return 'Use Atleast One number'

    } else {
        return '';
    }


}

export default function(data) {
    const { username, email, password, names, phone, cpassword } = data

    if (username !== undefined) {
        let emptyValidationText = checkEmpty(username, 'Please enter your username')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(username, 3, 'userName')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }
    if (names !== undefined) {
        let emptyValidationText = checkEmpty(names, 'Please enter your full name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(names, 5, 'Fullname')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (phone !== undefined) {
        let emptyValidationText = checkEmpty(phone, 'Please enter your phone number')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(phone, 9, 'Phone Number')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }


    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
            // let passwordValidation = confirmPassword(password, cpassword)
            // if (passwordValidation !== '') {
            //     return passwordValidation
            // }
            let strongPasswordValidation = strongPassword(password)
            if (strongPasswordValidation !== '') {
                return strongPasswordValidation
            }
        }
    }
    if (cpassword !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please confirm your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'confirm password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
            let passwordValidation = confirmPassword(password, cpassword)
            if (passwordValidation !== '') {
                return passwordValidation
            }

        }
    }


}