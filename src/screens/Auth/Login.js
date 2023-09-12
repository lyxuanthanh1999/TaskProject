import { View, TextInput, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from '../../Components'
import InputCus from '../../Components/InputCus'
import { Images } from '../../assets/Index'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux'
import Utils from '../../utils'
import { AcLogin, AcSave_Info } from '../../redux/actions/Auth'

const TextCus = (title = '') => {
    return <Text style={{
        fontSize: 12, color: colors.colors.main,
        fontWeight: 'bold', lineHeight: 19.44
    }}>{title}</Text>
}

const checkNull = (email, pass, check) => {
    if (email === '' || pass === '' || !check) return false
    return true

}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,3}))$/;
    return re.test(email);
}

function checkPasswordStrength(password) {
    let level = 0;

    if (/[a-z]/.test(password) && /[A-Z]/.test(password) && password.length > 6) {
        level = 1;
    }

    if (/\d/.test(password) && password.length > 6) {
        level = 2;
    }

    if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) && password.length > 6) {
        level = 3;
    }

    return level;
}

const showColor = (key) => {
    switch (key) {
        case 0: {
            return colors.colors.redStar
        };
        case 1: {
            return colors.colors.yellowishOrange
        };
        case 2: {
            return colors.colors.main
        };
        case 3: {
            return colors.colors.greenFE
        };

        default:
            return colors.colors.main
            break;
    }
}

const showPassIsStrong = (key) => {
    switch (key) {
        case 0: {
            return 'Weak'
        };
        case 1: {
            return 'Fair'
        };
        case 2: {
            return 'Good'
        };
        case 3: {
            return 'Strong'
        };

        default:
            break;
    }
}

const { height: HeightSC, width: WidthSC } = Dimensions.get('window')
const Login = () => {

    const _state = useSelector(state => state)
    console.log('_State : ', _state)
    const dispatch = useDispatch()
    const [Check, setCheck] = useState(false)
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')
    const [errPass, seterrPass] = useState(false)
    const [errMail, seterrMail] = useState(false)
    const [TextErrMail, setTextErrMail] = useState('Please enter your full email')
    const [colorPass, setcolorPass] = useState(colors.colors.main)

    const actionCheck = () => {
        setCheck(prev => !prev)
    }
    useEffect(() => {
        if (Pass.length < 6) {
            seterrPass(true)
            setcolorPass(showColor(checkPasswordStrength(Pass)))
        } else {
            setcolorPass(showColor(checkPasswordStrength(Pass)))
        }
    }, [Pass])
    useEffect(() => {
        if (Email.length === 0) {
            seterrMail(true)

        }
    }, [Email])

    const LoginApi = async (data) => {

        const domain = 'http://streaming.nexlesoft.com:3001'
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

    const actionLogin = async () => {
        if (checkNull(Email, Pass, Check)) {
            // alert('oke')
            // dispatch(AcLogin({ email: Email, password: Pass }))
            let res = await LoginApi({ email: Email, password: Pass })
            if (res?.accessToken !== '' || res?.accessToken?.length !== 0) {
                dispatch(AcSave_Info({ res: res }))
            }
        } else {
            // alert('Vui lòng nhập đầy đủ')
            if (!validateEmail(Email)) {
                seterrMail(true)
                setTextErrMail(`Email is not valid`)
            } else {
                seterrMail(false)
            }

        }
    }
    return (
        <ImageBackground source={Images.BG1} style={styles.container}>
            <KeyboardAwareScrollView scrollEnabled={false} style={{
                height: HeightSC, width: WidthSC,
                paddingHorizontal: 20
            }} >
                <View style={{ height: HeightSC / 4, width: WidthSC }} />
                <View style={styles.styleViewTitle}>
                    <Text style={[styles.styleTextTitle]}>
                        Let’s get you started!
                    </Text>
                </View>
                <View style={{
                    width: '100%',
                    marginVertical: 5
                }}>
                    <InputCus

                        valid={!errMail}
                        errorText={TextErrMail}
                        styleInput={{
                            fontSize: 16, fontWeight: 'bold', paddingBottom: 5,
                            color: colors.colors.grayLight
                        }}
                        styleUnderLine={{
                            borderBottomColor: colors.colors.main
                        }}
                        onChangeText={text => {
                            seterrMail(false)
                            setEmail(text)
                        }}
                        labelFontSize={12}
                        placeholder={'Email'} value={Email} />

                </View>
                <View style={{ paddingVertical: 10 }} />
                <View style={{
                    width: '100%',
                    marginVertical: 5
                }}>
                    <InputCus
                        labelFontSize={12}
                        valid={!errPass}
                        errorText={`Passwords is ${showPassIsStrong(checkPasswordStrength(Pass))}`}
                        onChangeText={text => {
                            seterrPass(false)
                            setPass(text)
                        }}
                        styleInput={{
                            fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: colors.colors.grayLight
                        }}
                        value={Pass}
                        styleUnderLine={{
                            borderBottomColor: colorPass
                        }}
                        secureTextEntry={true} placeholder={'Password'} />
                </View>
                <View style={{ paddingVertical: 10 }} />
                <View style={{ justifyContent: 'flex-start', width: '100%', marginVertical: 20 }}>
                    <TouchableOpacity onPress={actionCheck} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image
                                style={{ width: 23, height: 23, tintColor: colors.colors.main }}
                                source={Check ? Images.icCheck : Images.icUnCheck}
                            />
                        </View>
                        <View style={{ paddingHorizontal: 5 }}>
                            <Text style={{ fontSize: 14, color: colors.colors.white, fontWeight: 'bold' }}>
                                I am over 16 years of age
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingVertical: 10 }} />
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.styleTextPrivacyPolicy}>
                        By clicking Sign Up, you are indicating that you have read and agree to the {TextCus('Terms of Service')} and {TextCus('Privacy Policy')}
                    </Text>
                </View>
                <View style={styles.stViewRegisLogin}>
                    <TouchableOpacity onPress={() => alert('Đăng Ký')} style={{ justifyContent: 'center' }}>
                        <Text style={styles.styleText}>{'Sign Up'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={actionLogin} style={styles.styleButtonLogin}>
                        <Image
                            source={Images.icCalandarRight}
                            style={styles.icButtonLogin}
                            resizeMode='stretch'
                        />
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: colors.colors.greenFE, alignItems: 'center', justifyContent: 'center',
    },
    icButtonLogin: {
        width: 15, height: 15, tintColor: 'white'
    },
    styleButtonLogin: {
        paddingVertical: 10, paddingHorizontal: 20,
        height: 54, width: 54, borderWidth: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 30,
        borderColor: colors.colors.main
    },
    styleText: {
        fontSize: 16, color: colors.colors.white,
        fontWeight: 'bold', lineHeight: 19.44
    },
    stViewRegisLogin: {
        paddingVertical: 20, flexDirection: 'row', justifyContent: 'space-between', width: '100%'
    },
    styleTextPrivacyPolicy: {
        fontSize: 12, color: colors.colors.grayLight,
        fontWeight: 'bold', lineHeight: 19.44
    },
    styleViewTitle: {
        width: '100%', justifyContent: 'flex-start', marginVertical: 40
    },
    styleTextTitle: { color: 'white', fontSize: 22, fontWeight: 'bold' }
})

export default Login