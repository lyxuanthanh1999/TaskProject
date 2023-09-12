import * as ActionTypes from '../actions/type';
import { produce } from 'immer';
import _ from 'lodash';
import Utils from '../../utils';
import apiAuth from '../../api';
export const initialStateAuth = {
    isLogin: false,
    infoUser: {},
    isCheckToken: false
};
const domain = 'http://streaming.nexlesoft.com:3001'
const LoginApi = async (data) => {
    try {
        const requestBody = JSON.stringify(data);
        const res = await Utils.post_api(`${domain}/auth/signin`, requestBody);

        if (res.statusCode === 401) {
            alert('Sai thông tin tài khoản');
            return -1;
        } else {
            return res;
        }
    } catch (error) {
        // Xử lý lỗi nếu có
        console.error(error);
        return {};
    }
};


// Reducer
const AuthReducer = (state = initialStateAuth, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case ActionTypes.SAVE_INFO: {
                draft.infoUser = action.data?.res;
                draft.isCheckToken = true
                break;
            }

        }
    });
};
// const AuthReducer = (state = initialStateAuth, action) => {
//     return produce(state, draft => {
//         switch (action.type) {
//             case ActionTypes.LOGIN: {
//                 // draft.infoUser = action.data;
//                 Utils.nlog('action data : ', action.data);
//                 let resT = {}
//                 let isCheckTokenT = {}
//                 // Gọi API đăng nhập
//                 LoginApi(action.data)
//                     .then(res => {
//                         // console.log('STATE : ', original(state))
//                         Utils.nlog('action res : ', res);
//                         if (res != -1) {
//                             resT = res;
//                             isCheckTokenT = true
//                         }
//                         else {
//                             resT = {};
//                             isCheckTokenT = false
//                         }
//                     })
//                     .catch(error => {
//                         // Xử lý lỗi nếu có
//                         console.error('action erros', error);
//                     });
//                 draft.infoUser = resT
//                 draft.isCheckToken = isCheckTokenT
//                 state.infoUser = draft.infoUser
//                 state.isCheckToken = draft.isCheckToken
//                 break;
//             }
//             case ActionTypes.SAVE_INFO: {
//                 // draft.infoUser = action.data;
//                 // draft.userDH = { ...state.userDH, ...action.data };
//                 break;
//             }
//             case ActionTypes.CHOOSEPRODUCT: {
//                 // draft.infoUser = action.data;
//                 break;
//             }
//         }
//     });
// };

export default AuthReducer;


