// http://streaming.nexlesoft.com:3001/auth/signin

import Utils from "../utils";
import axios from 'axios';


const domain = 'http://streaming.nexlesoft.com:3001'
async function LoginAuth(body) {
    // postApi()
    console.log('Body : ', JSON.stringify(body))

    // const requestBody = JSON.stringify({
    //     email: 'test1@gmail.com',
    //     password: '12345678',
    // });
    const requestBody = JSON.stringify(body);
    // https://jsonplaceholder.typicode.com/posts

    let res = await Utils.post_api(`${domain}/auth/signin`, requestBody)

    return res
}
const apiAuth = {
    LoginAuth
}

export default apiAuth



