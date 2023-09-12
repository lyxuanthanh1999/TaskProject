/* eslint-disable no-alert */
import { useNavigation } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { CommonActions, StackActions } from '@react-navigation/native';
// import AsyncStorage from '@react-native-community/async-storage';
// import ImageEditor from '@react-native-community/image-editor';
// import {
//     AppgetGlobal,
//     AppgetRootGlobal,
//     AppsetGlobal,
//     ROOTGlobal,
// } from './keys/dataGlobal';
// import RNFS from 'react-native-fs';

// import axios from 'axios';
// import { appConfig } from './Config';
// import { nGlobalKeys } from './keys/globalKey';

// const TIMEOUT = 1000;
// var TOKEN = '';

// let APIKit = axios.create({
//     baseURL: appConfig.domain,
//     timeout: TIMEOUT,
// });
// let APIHRKit = axios.create({
//     baseURL: appConfig.domainHR,
//     timeout: TIMEOUT,
// });
// let APIFundKit = axios.create({
//     baseURL: appConfig.domainFund,
//     timeout: TIMEOUT,
// });
async function post_api(
    strUrl,
    strBody = '',
    showMsg = false,
    chktoken = false,
    token = '',
    isPost = false,
) {
    let smethod = 'POST';

    if (strBody == '' && !isPost) {
        smethod = 'GET';
    }
    try {
        // nlog('method------------------', token);
        nlog('method------------------', strBody);
        const response = await fetch(strUrl, {
            method: smethod,
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip',
                'Content-Type': 'application/json',
                token: token == '' ? '' : token,
                'Authorization': token == '' ? '' : token,
            },
            body: strBody,
        });
        const res = await response.json();
        if (res.ExceptionMessage != undefined) {
            // edit tuỳ từng object api
            nlog('[API]Lỗi API:', res);
            return -3;
        }

        return res;
    } catch (error) {
        nlog('[API]Lỗi error:', error);
        // if (showMsg) Alert.alert('Lỗi mạng', 'Kết nối server thất bại');
        return -1;
    }
}
async function get_api(strUrl, showMsg = true, chktoken = false, token = '') {
    const res = await post_api(strUrl, '', showMsg, chktoken, token);
    return res;
}


let _navigator;
function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}
function navigate(routeName, params = {}) {
    // alert(JSON.stringify(params));
    try {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            }),
        );
    } catch (error) {
        // alert('lỗi gócreen');
        console.log(error);
    }
}
function push(routeName, params = {}) {
    // alert(JSON.stringify(params));
    try {
        _navigator.dispatch(
            StackActions.push(
                routeName,
                params,
            ),
        );
    } catch (error) {
        // alert('lỗi gócreen');
    }
}
function replace(routeName, params = {}) {
    _navigator.dispatch(StackActions.replace(routeName, params));
}

function goBack() {
    try {
        _navigator.dispatch(NavigationActions.back({ type: 'GO_BACK' }));
    } catch (error) { }
}
function goBackTop(routeName = 'RootMain') {
    try {
        _navigator.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: routeName },
                    // {
                    //     name: routeName,
                    // },
                ],
            }),
        );

        // const resetAction = StackActions.reset({
        //     index: 0,
        //     actions: [NavigationActions.navigate({ routeName: 'Profile' })],
        // });
        // this.props.navigation.dispatch(resetAction);
    } catch (error) { }
}
function nlog(...val) {
    console.log(...val);
}
// function getGlobal(keys, defaultValue) {
//     return AppgetGlobal(keys, defaultValue);
// }
// // Hàm get giá trị gốc theo keys - read write. Giá trị thay đổi làm thay đổi giá trị root
// function getRootGlobal(keys, defaultValue) {
//     return AppgetRootGlobal(keys, defaultValue);
// }
// // Hàm khởi tạo một biến gốc, cũng có thể dùng để thay đổi một gốc.
// function setGlobal(keys, value) {
//     AppsetGlobal(keys, value);
// }
// async function ngetStore(keys, defaultValue = null) {
//     let temp = await AsyncStorage.getItem(keys);
//     if (temp == null) return defaultValue;
//     try {
//         let tempValue = JSON.parse(temp);
//         return tempValue;
//     } catch (error) {
//         return temp;
//     }
// }

// async function nsetStore(keys, value) {
//     if (typeof value !== 'string') value = JSON.stringify(value);
//     await AsyncStorage.setItem(keys, value);
// }

const toggleDrawer = async navigation => {
    // Traverse parent stack until we can go back
    navigation.toggleDrawer();
    // parent ?.goBack();
};
// // -- custom AynsStore
function ngetParam(nthis, keys, defaultValue) {
    // nlog("giá tị this.", nthis.props.route)
    let param = nthis.props.route?.params[keys]
        ? nthis.props.route?.params[keys]
        : defaultValue;
    return param;
}
// // const Title = Utils.ngetParam({ props: props }, 'Title', "Thông báo");
// // const Message = Utils.ngetParam({ props: props }, 'Message', "");
// // const ButtonTextOK = Utils.ngetParam({ props: props }, "TextOK", "Xác nhận");
// // const ButtonTextCancel = Utils.ngetParam({ props: props }, "TextCancel", "Thoát");
// // const callbackOK = Utils.ngetParam({ props: props }, "callbackOK", () => { });
// // const callbackCancel = Utils.ngetParam({ props: props }, "callbackCancel", () => { });
// function showMessageBoxOKCancel(
//     Title = '',
//     Message = '',
//     ButtonTextOK = 'Xác nhận',
//     ButtonTextCancel = 'Cancel',
//     callbackOK = () => { },
//     callbackCancel = () => { },
// ) {
//     navigate('Root.MessageBox', {
//         Title,
//         Message,
//         ButtonTextOK,
//         ButtonTextCancel,
//         callbackOK,
//         callbackCancel,
//     });
// }
// function showMessageBoxOK(
//     Title = '',
//     Message = '',
//     ButtonTextOK = 'Xác nhận',
//     callbackOK = () => { },
// ) {
//     navigate('Root.MessageBox', {
//         Title,
//         Message,
//         ButtonTextOK,
//         callbackOK,
//         isOK: true,
//     });
// }
function removeAccents(str) {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}
// async function parseBase64(
//     uri,
//     height = 0,
//     width = 0,
//     downSize = 0.3,
//     isVideo = false,
//     isFile = false,
// ) {
//     try {
//         let uriReturn = uri;
//         if (!isVideo && height != 0 && width != 0) {
//             uriReturn = await ImageEditor.cropImage(uri, {
//                 offset: { x: 0, y: 0 },
//                 size: { width, height },
//                 displaySize: {
//                     width: width * downSize,
//                     height: height * downSize,
//                 },
//                 resizeMode: 'contain',
//             });
//         }
//         if (Platform.OS == 'ios' && isVideo) {
//             const dest = `${RNFS.TemporaryDirectoryPath}${Math.random()
//                 .toString(36)
//                 .substring(7)}.mp4`;
//             uriReturn = await RNFS.copyAssetsVideoIOS(uri, dest);
//         }
//         if (uriReturn) {
//             try {
//                 const data64 = await RNFS.readFile(uriReturn, 'base64');
//                 return data64;
//             } catch (error) {
//                 return '';
//             }
//         }
//     } catch (cropError) {
//         nlog('error----- 2:', cropError);
//         return '';
//     }
// }
// function inputMoney(value, isNeg = false, dec = 9) {
//     if (value == undefined) value = '0';
//     let stemp = '';
//     let svalue = value.toString();
//     //check dấu âm
//     let iam = '';
//     if (isNeg && svalue.length > 0 && svalue[0] == '-') {
//         iam = '-';
//     }
//     //xoá ký tự khác số trước khi format
//     for (let i = 0; i < svalue.length; i++) {
//         //xoá tất cả kí tự không phải là số hợp lệ
//         let tchar = svalue[i];
//         if (tchar != '.' && isNaN(parseInt(tchar)))
//             while (true) {
//                 svalue = svalue.replace(tchar, '');
//                 if (!svalue.includes(tchar)) {
//                     i = i - 1;
//                     break;
//                 }
//             }
//     }
//     //kiểm tra lấy thập phân
//     let mval = svalue.split('.');
//     let thapphan = '';
//     if (mval.length >= 2) {
//         svalue = mval[0].slice();
//         thapphan = mval[1];
//         if (dec != 0 && thapphan == '') thapphan = '.';
//         else {
//             thapphan = thapphan.substr(
//                 0,
//                 thapphan.length < dec ? thapphan.length : dec,
//             );
//             thapphan = '.' + thapphan;
//         }
//     }
//     //format chuỗi số
//     if (!isNaN(parseFloat(svalue))) svalue = parseFloat(svalue).toString();
//     let icount = 0;
//     for (let i = svalue.length - 1; i >= 0; i--) {
//         stemp = svalue[i] + stemp;
//         icount++;
//         if (icount == 3 && i > 0) {
//             icount = 0;
//             stemp = ',' + stemp;
//         }
//     }
//     if (stemp == '') stemp = '0';
//     else stemp = iam + stemp;
//     return stemp + thapphan;
// }

// function formatNumber(value) {
//     if (
//         value == null ||
//         value == undefined ||
//         value == '' ||
//         isNaN(parseFloat(value))
//     )
//         value = '0';
//     for (let i = 0; i < value.length; i++) {
//         const inum = value[i];
//         if (isNaN(parseFloat(inum)) && inum != '.') {
//             value = value.replace(inum, '');
//             i--;
//         }
//     }
//     return parseFloat(value);
// }
function goscreen(nthis, routeName, param = null) {
    if (param) {
        nthis.props.navigation.navigate(routeName, {
            ...param,
        });
    } else {
        nthis.props.navigation.navigate(routeName);
    }
}
// let _RefLoading = null;
// function setTopLeveLoading(RefLoading) {
//     _RefLoading = RefLoading;
// }
// function setToggleLoading(isShow = true) {
//     if (isShow && _RefLoading != null) {
//         _RefLoading.show();
//         return;
//     } else if (!isShow && _RefLoading != null) {
//         _RefLoading.hide();
//         return;
//     } else {
//         return;
//     }
// }
const DefaultPage = {
    Page: 1,
    AllPage: 1
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,3}))$/;
    return re.test(email);
}
const Utils = {
    setTopLevelNavigator,
    navigate,
    push,
    replace,
    goBack,
    nlog,
    goscreen,
    toggleDrawer,
    ngetParam,
    removeAccents,
    goBackTop,
    DefaultPage,
    post_api,
    get_api,
    validateEmail
    // setTopLeveLoading,
    // setToggleLoading,
    // APIKit,
    // APIHRKit,
    // APIFundKit,
    // setClientToken,
    // setClientTokenHR,
    // getGlobal,
    // getRootGlobal,
    // setGlobal,

    // ngetStore,
    // nsetStore,

    // showMessageBoxOKCancel,
    // showMessageBoxOK,

    // parseBase64,
    // inputMoney,
    // formatNumber,
};
export default Utils;
