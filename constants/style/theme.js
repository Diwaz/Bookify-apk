import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export const COLORS = {
    // base colors
    primary: "#1C2363", // custom pruple
    secondary: "#1C2363", //  custom graygray

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",

    lightGray: "#F5F5F6",
    lightGray2: "#F6F6F7",
    lightGray3: "#EFEFF1",
    lightGray4: "#F8F8F9",
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: scale(50),
    h1: scale(30),
    h2: scale(22),
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    // largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "RudaR", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "RudaB", fontSize: SIZES.h2, lineHeight: 30 },
    // h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    // h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    // body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    // body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    // body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    // body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    // body5: { fontFamily: "Roboto-Bold", fontSize: SIZES.body5, lineHeight: 22 },
    // special1: { fontFamily: "MuseoModerno_Thin(2)", fontSize: SIZES.body1, lineHeight: 36 },

};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;