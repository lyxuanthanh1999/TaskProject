import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

// Color system
export const white = '#ffffff';
export const grey1 = '#f4f4f4';
export const grey2 = '#e9ecef';
export const grey3 = '#dee2e6';
export const grey4 = '#adb5bd';
export const grey5 = '#999999';
export const grey6 = '#777777';
export const grey7 = '#383838';
export const grey8 = '#1e1e1e';
export const grey9 = '#2C2C2C';
export const black = '#121212';

export const red = '#e60023';
export const orange = '#F2711C';
export const yellow = '#FBBD08';
export const olive = '#B5CC18';
export const green = '#51d96c';
export const teal = '#00B5AD';
export const blue = '#2185D0';
export const violet = '#6435C9';
export const purple = '#A333C8';
export const pink = '#E03997';
export const brown = '#A5673F';
export const commonStyles = {
    colors: {
        colorModal: 'rgba(0,0,0,0.30)',
    },
    container: {
        flex: 1,
        backgroundColor: grey1,
        paddingBottom: getBottomSpace() / 2,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    }
};
// Export dark theme
export const darkColors = {
    key: 'dark',
    colors: {
        // main: '#19b1ef',
        main: '#96b0a5',
        green: '#6c9381',
        greenE: '#228b22',
        colorBell: '#f66d3c',
        green1: '6ED160',
        primary: white,
        secondary: grey6,
        bgColor: black,
        bgUnconected: 'rgba(1,1,1,0.30)',
        bgColorSecondary: grey7,
        white: white,
        grey1: grey1,
        grey2: grey2,
        grey3: grey3,
        grey4: grey4,
        grey5: grey5,
        grey6: grey6,
        grey7: grey7,
        grey8: grey8,
        black: black,
        orange: orange,
        greyOutline: '#bbb',
        searchBg: '#303337',
        listItemBg: grey8,
        success: green,
        error: red,
        warning: yellow,
        disabled: 'hsl(208, 8%, 90%)',
        // Darker color if hairlineWidth is not thin enough
        divider: grey6,
        border: grey9,
        platform: {
            ios: {
                primary: '#007aff',
                secondary: '#5856d6',
                success: '#4cd964',
                error: '#ff3b30',
                warning: '#ffcc00',
            },
            android: {
                primary: '#2196f3',
                secondary: '#9C27B0',
                success: '#4caf50',
                error: '#f44336',
                warning: '#ffeb3b',
            },
        },
        nocolor: 'transparent',
        colorPink: '#E13C60',
        colorGreen: '#43C9AA',
        ViewTopHotelName: '#4A4949',
        ViewTopArea: '#7B7B7B',
        BackgroundHome: '#f2f2f2',
        backgroundHistory: '#F8F8F8',
        textGuestContent: '#343434',
        greyLight: '#E3E3E3',
        colorGolden: '#f2ba01',
        colorHeaderApp: '#01638D', //Màu header app

        redStar: '#F50000',
        colorBlue: '#157EFB',
        colorTextBlue: '#01638d',
        colorTextGray: '#b2b2b2',
        colorGrayLight: '#696969',
        colorGrayText: '#8e8e93',
        colorGrayIcon: '#ACACAC',
        colorGrayBgr: '#E8E8E9',
        colorRed: '#CE0B24',
        brownishGrey: '#666666',
        mediumGreen: '#2faa33',
        brownGreyTwo: '#979797',
        brownGreyThree: '#8e8e8e',
        //---Màu đặc biệt
        colorPink2: '#ff6090',
        colorPink3: '#e3395e',
        //--new
        dodgerBlue: '#4e7efc',
        softBlue: '#4f80ff',
        placeholderBlue: 'rgba(13,51,148,0.68)',
        sapphire: '#1b3ca6',
        veryLightPink: '#eeeeee',
        grey: '#808080',
        blackTwo: '#090909',
        bgRootScreen: '#FDF4CA',
        bgRootScreen2: '#FDF4CB',
        //--color app tripU
        colorSoftBlue: '#4F80FF',
        colorSapphire: '#1B3CA6',
        colorGreyishBrown: '#444444',
        // colorSapphireTwo: '#2345B4',
        colorVeryLightBlue: '#E2EAFE',
        colorBrownishGrey: '#707070',
        colorSapphireTwo: '#2141B7',
        colorStarYellow: '#FFC411',
        colorPaleGrey: '#E9EFFF',
        colorLightGrayBlue: '#b0b2b2',
        colorBrownGrey: '#A7A7A7',
        colorVeryLightPink: '#D5D5D5',
        colorButterscotch: '#F7B42B',
        colorBrownGreyThree: '#8E8E8E',
        colorVeryLightPinkTwo: '#B9B9B9',
        colorSunflower: '#FEC411',
        colorBrownLine: 'rgba(221, 221, 221,1.0)',
        colorGreenBtn: 'rgba(0,177,41,0)',
        colorSalmon: '#FF6C6C',
        colorTrueGreen: '#19A706',
        colorVeryLightPinkThree: '#C3C3C3',
        colorBrownishGreyTwo: '#626262',
        colorPowderBlue: '#B2C9FF',
        colorCharcoalGrey: '#37384A',
        colorKellyGreen: '#00B129',
        colorGreyishBrownThree: '#3E3E3E',
        colorLightPeriwinkle: '#D1DDFF',
        colorRoyal: '#0D3394',
        colorVeryLightPinkFour: '#EAEAEA',
        colorPaleGreyTwo: '#F3F6FF',
        veryLightPinkFive: '#E9E7E7',
        paleGreyThree: '#edf4ff',
        carolinaBlue: '#89aaff',
        pastelBlue: '#A2BCFF',
        whitegay: '#F5F5F5',
        lightGreyBlue: '#acb5bd',
        lightGreyBlue_50: 'rgba(172, 181, 189, 0.5)',
        tangerine: '#FE9508',
        blue: '#063dbf',
        blueZalo: '#126AF4',
        waterBlue: '#168ed9',
        veryLightPinkSeven: '#f2f2f2',
        dark: '#212429',
        dark_30: 'rgba(33, 36, 41, 0.3)',
        veryLightPinkEight: '#c0c0c0',
        darkTwo: '#242a39',
        seaweedGreen: '#36b37e',
        coral: '#ff4d4d',
        cobaltBlue: '#051899',
        blueGrey: '#78849e',
        blackShadow: '#000000',
        slate: '#454f63',
        black_7: 'rgba(0,0,0,0.1)',
        black_20: 'rgba(0,0,0,0.2)',
        black_60: 'rgba(0,0,0,0.6)',
        black_11: 'rgba(0,0,0,0.11)',
        black_50: 'rgba(0,0,0,0.5)',
        black_80: 'rgba(0,0,0,0.8)',
        black_16: 'rgba(0,0,0,0.16)',
        blueGrey_20: 'rgba(120,132,158,0.2)',
        oceanBlue: '#0253b3',
        gunmetal: '#495057',
        veryLightPinkThree: '#d4d4d4',
        brownishGreyTwo: '#767676',
        orangeyRed: '#ff5630',
        pumpkinOrange: '#f68106',
        orangeThree: '#f5811b',
        black_facebook: '#090909',
        whiteTwo: '#F7F7F7',
        orangeYellow: '#ffab00',
        turquoiseBlue_05: 'rgba(0,184,217,0.05)',
        turquoiseBlue_10: 'rgba(0,184,217,0.1)',
        turquoiseBlue: '#00b8d9',
        blueTwo: '#0740c0',
        blueyGreyTwo: '#989fb3',
        orangeFive: '#f3780c',
        royal: '#0d3394',
        yellowishOrange: '#f7971e',
        //---
        greenFE: '#15824B',
        greenyBlue: '#3db693',
        peacockBlue: '#01638d',
        brownGreyFour: '#b3b3b3',
        backgroundModal: 'rgba(0,0,0,0.16)',
        colorUnderlineLink: '#00B9FF',
        colorBlueLight: '#04B2D9',
        grayLight: '#B0B2B2',
        colorGrayTwo: '#F5F5F5',
        listColorBtnLe: ['#F2BA01', '#04B2D9', '#B0B2B2', '#2E4053', '#45B39D', '#7F8C8D'],
        listColorBtnChan: ['#01638D', '#F2BA01', '#04B2D9', '#B0B2B2', '#2E4053', '#45B39D', '#7F8C8D'],
    },

    // Component ------------------------RNText
    RNText: {
        primary: {
            color: white,
        },
        secondary: {
            color: grey6,
        },
        third: {
            color: grey5,
        },
    },

    // Component Icon
    Icon: {
        color: white,
    },

    // Component SearchBar
    SearchBar: {
        bgColor: grey8,
    },

    // navigation Tab
    TabNavigator: {
        tabStyle: {
            borderTopColor: black,
            backgroundColor: grey8,
        },
    },

    // Button
    Button: {
        backgroundColor: white,
        borderColor: white,
        color: black,
        outlineColor: white,
        outlineBorderColor: grey7,
    },
    // Modal
    Modal: {
        backgroundColor: grey7,
    },

    // Loading
    Loading: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: white,
    },

    // ProductItem
    ProductItem: {
        color: white,
    },

    // SwitchProduct
    SwitchProduct: {
        color: grey7,
        selectColor: white,
    },

    // CategoryProductList
    CategoryProductList: {
        color: grey5,
        borderColor: grey7,
    },

    // Wishlist Item (ProductItem2)
    ProductItem2: {
        backgroundColor: grey8,
    },

    // ViewLabel
    ViewLabel: {
        color: grey6,
        colorHeading: white,
    },

    // ProductGrouped
    ProductGrouped: {
        quantityColor: grey8,
    },

    // LastestBlog
    LastestBlog: {
        backgroundColor: grey7,
    },

    // ChooseItem
    ChooseItem: {
        bgColor: 'transparent',
        borderColor: grey7,
        borderColorSub: 'transparent',
        bgColorSelect: grey7,
        borderColorSelect: grey7,
        borderColorSelectSub: grey7,
        iconSelect: green,
    },

    // OrderInfo
    OrderInfo: {
        avatarColor: grey8,
        avatarOpacity: 1,
    },
    // ButtonSwiper
    ButtonSwiper: {
        like: {
            backgroundColor: grey1,
            color: black,
        },
        unlike: {
            backgroundColor: grey1,
            color: black,
        },
        delete: {
            backgroundColor: red,
            color: white,
        },
        default: {
            backgroundColor: red,
            color: white,
        },
    },

    // LimeReviewProduct
    LimeReviewProduct: {
        color: grey7,
        colorRating: grey6,
    },

    // Screen About us
    AboutUsScreen: {
        titleColor: '#20c997',
        researchColor: grey6,
    },
};

// Export default theme
export const lightColors = {
    key: 'light',
    colors: {
        main: '#647FFF',

        main2: '#9FF3B7',
        green: '#6c9381',
        greenE: '#228b22',
        colorBell: '#f66d3c',
        green1: '#5FD0E3',
        primary: black,
        secondary: grey6,
        bgColor: white,
        bgColorSecondary: grey1,
        white: white,
        grey1: grey1,
        grey2: grey2,
        grey3: grey3,
        grey4: grey4,
        grey5: grey5,
        grey6: grey6,
        grey7: grey7,
        grey8: grey8,
        black: black,
        orange: orange,
        greyOutline: '#bbb',
        searchBg: '#303337',
        listItemBg: white,
        success: green,
        error: red,
        warning: yellow,
        disabled: 'hsl(208, 8%, 90%)',
        // Darker color if hairlineWidth is not thin enough
        divider: grey2,
        border: grey2,
        platform: {
            ios: {
                primary: '#007aff',
                secondary: '#5856d6',
                success: '#4cd964',
                error: '#ff3b30',
                warning: '#ffcc00',
            },
            android: {
                primary: '#2196f3',
                secondary: '#9C27B0',
                success: '#4caf50',
                error: '#f44336',
                warning: '#ffeb3b',
            },
        },
        bgUnconected: 'rgba(0,0,0,0.30)',
        nocolor: 'transparent',
        colorPink: '#E13C60',
        colorGreen: '#43C9AA',
        ViewTopHotelName: '#4A4949',
        ViewTopArea: '#7B7B7B',
        BackgroundHome: '#f2f2f2',
        backgroundHistory: '#F8F8F8',
        textGuestContent: '#343434',
        greyLight: '#E3E3E3',
        colorGolden: '#f2ba01',
        colorHeaderApp: '#01638D', //Màu header app

        redStar: '#F50000',
        colorBlue: '#157EFB',
        colorTextBlue: '#01638d',
        colorTextGray: '#b2b2b2',
        colorGrayLight: '#696969',
        colorGrayText: '#8e8e93',
        colorGrayIcon: '#ACACAC',
        colorGrayBgr: '#E8E8E9',
        colorRed: '#CE0B24',
        brownishGrey: '#666666',
        mediumGreen: '#2faa33',
        brownGreyTwo: '#979797',
        brownGreyThree: '#8e8e8e',
        //---Màu đặc biệt
        colorPink2: '#ff6090',
        colorPink3: '#e3395e',
        //--new
        dodgerBlue: '#4e7efc',
        softBlue: '#4f80ff',
        placeholderBlue: 'rgba(13,51,148,0.68)',
        sapphire: '#1b3ca6',
        veryLightPink: '#eeeeee',
        grey: '#808080',
        blackTwo: '#090909',
        bgRootScreen: '#FDF4CA',
        //--color app tripU
        colorSoftBlue: '#4F80FF',
        colorSapphire: '#1B3CA6',
        colorGreyishBrown: '#444444',
        // colorSapphireTwo: '#2345B4',
        colorVeryLightBlue: '#E2EAFE',
        colorBrownishGrey: '#707070',
        colorSapphireTwo: '#2141B7',
        colorStarYellow: '#FFC411',
        colorPaleGrey: '#E9EFFF',
        colorLightGrayBlue: '#b0b2b2',
        colorBrownGrey: '#A7A7A7',
        colorVeryLightPink: '#D5D5D5',
        colorButterscotch: '#F7B42B',
        colorBrownGreyThree: '#8E8E8E',
        colorVeryLightPinkTwo: '#B9B9B9',
        colorSunflower: '#FEC411',
        colorBrownLine: 'rgba(221, 221, 221,1.0)',
        colorGreenBtn: 'rgba(0,177,41,0)',
        colorSalmon: '#FF6C6C',
        colorTrueGreen: '#19A706',
        colorVeryLightPinkThree: '#C3C3C3',
        colorBrownishGreyTwo: '#626262',
        colorPowderBlue: '#B2C9FF',
        colorCharcoalGrey: '#37384A',
        colorKellyGreen: '#00B129',
        colorGreyishBrownThree: '#3E3E3E',
        colorLightPeriwinkle: '#D1DDFF',
        colorRoyal: '#0D3394',
        colorVeryLightPinkFour: '#EAEAEA',
        colorPaleGreyTwo: '#F3F6FF',
        veryLightPinkFive: '#E9E7E7',
        paleGreyThree: '#edf4ff',
        carolinaBlue: '#89aaff',
        pastelBlue: '#A2BCFF',
        whitegay: '#F5F5F5',
        lightGreyBlue: '#acb5bd',
        lightGreyBlue_50: 'rgba(172, 181, 189, 0.5)',
        tangerine: '#FE9508',
        blue: '#063dbf',
        blueZalo: '#126AF4',
        waterBlue: '#168ed9',
        veryLightPinkSeven: '#f2f2f2',
        dark: '#212429',
        dark_30: 'rgba(33, 36, 41, 0.3)',
        veryLightPinkEight: '#c0c0c0',
        darkTwo: '#242a39',
        seaweedGreen: '#36b37e',
        coral: '#ff4d4d',
        cobaltBlue: '#051899',
        blueGrey: '#78849e',
        blackShadow: '#000000',
        slate: '#454f63',
        black_20: 'rgba(0,0,0,0.2)',
        black_60: 'rgba(0,0,0,0.6)',
        black_11: 'rgba(0,0,0,0.11)',
        black_50: 'rgba(0,0,0,0.5)',
        black_80: 'rgba(0,0,0,0.8)',
        black_16: 'rgba(0,0,0,0.16)',
        blueGrey_20: 'rgba(120,132,158,0.2)',
        oceanBlue: '#0253b3',
        gunmetal: '#495057',
        veryLightPinkThree: '#d4d4d4',
        brownishGreyTwo: '#767676',
        orangeyRed: '#ff5630',
        pumpkinOrange: '#f68106',
        orangeThree: '#f5811b',
        black_facebook: '#090909',
        whiteTwo: '#F7F7F7',
        orangeYellow: '#ffab00',
        turquoiseBlue_05: 'rgba(0,184,217,0.05)',
        turquoiseBlue_10: 'rgba(0,184,217,0.1)',
        turquoiseBlue: '#00b8d9',
        blueTwo: '#0740c0',
        blueyGreyTwo: '#989fb3',
        orangeFive: '#f3780c',
        royal: '#0d3394',
        yellowishOrange: '#f7971e',
        //---
        greenFE: '#15824B',
        greenyBlue: '#3db693',
        peacockBlue: '#01638d',
        brownGreyFour: '#b3b3b3',
        backgroundModal: 'rgba(0,0,0,0.16)',
        colorUnderlineLink: '#00B9FF',
        colorBlueLight: '#04B2D9',
        grayLight: '#B0B2B2',
        colorGrayTwo: '#F5F5F5',
        listColorBtnLe: ['#F2BA01', '#04B2D9', '#B0B2B2', '#2E4053', '#45B39D', '#7F8C8D'],
        listColorBtnChan: ['#01638D', '#F2BA01', '#04B2D9', '#B0B2B2', '#2E4053', '#45B39D', '#7F8C8D'],
    },
    // Component-------------------------- RNText
    RNText: {
        primary: {
            color: black,
        },
        secondary: {
            color: grey6,
        },
        third: {
            color: grey5,
        },
    },

    // Component Icon
    Icon: {
        color: black,
    },

    // Component SearchBar
    SearchBar: {
        bgColor: grey1,
    },

    // navigation Tab
    TabNavigator: {
        tabStyle: {
            borderTopColor: grey1,
            backgroundColor: white,
        },
    },

    // Button
    Button: {
        backgroundColor: black,
        borderColor: black,
        color: white,
        outlineColor: black,
        outlineBorderColor: black,
    },

    // Button
    Modal: {
        backgroundColor: white,
    },

    // Loading
    Loading: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: black,
    },

    // ProductItem
    ProductItem: {
        color: grey6,
    },

    // SwitchProduct
    SwitchProduct: {
        color: grey4,
        selectColor: black,
    },

    // CategoryProductList
    CategoryProductList: {
        color: black,
        borderColor: grey2,
    },

    // Wishlist Item (ProductItem2)
    ProductItem2: {
        backgroundColor: white,
    },

    // ViewLabel
    ViewLabel: {
        color: grey5,
        colorHeading: black,
    },
    // ProductGrouped
    ProductGrouped: {
        quantityColor: white,
    },
    // LastestBlog
    LastestBlog: {
        backgroundColor: white,
    },
    // ChooseItem
    ChooseItem: {
        bgColor: 'transparent',
        borderColor: grey2,
        borderColorSub: 'transparent',
        bgColorSelect: 'transparent',
        borderColorSelect: black,
        borderColorSelectSub: black,
        iconSelect: black,
    },

    // ChooseItem
    OrderInfo: {
        avatarColor: red,
        avatarOpacity: 0.05,
    },

    // ButtonSwiper
    ButtonSwiper: {
        like: {
            backgroundColor: grey2,
            color: black,
        },
        unlike: {
            backgroundColor: grey2,
            color: black,
        },
        delete: {
            backgroundColor: red,
            color: white,
        },
        default: {
            backgroundColor: red,
            color: white,
        },
    },

    // LimeReviewProduct
    LimeReviewProduct: {
        color: grey3,
        colorRating: '#000',
    },

    // Screen About us
    AboutUsScreen: {
        titleColor: grey4,
        researchColor: black,
    },
};

export default lightColors;
