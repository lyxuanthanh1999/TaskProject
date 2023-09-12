

import * as ActionTypes from './type';

export const AcSave_Info = val => ({
    type: ActionTypes.SAVE_INFO,
    data: val
})
export const AcLogin = val => ({
    type: ActionTypes.LOGIN,
    data: val
})
export const AcChooseProduct = val => ({
    type: ActionTypes.CHOOSEPRODUCT,
    data: val
})

