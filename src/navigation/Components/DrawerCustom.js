import { StackActions, useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Images } from '../../assets/Index';
import { colors } from '../../Components';
import Utils from '../../utils';
import ConfigScreen from '../ConfigScreen';
// import { showMessage } from 'react-native-flash-message';
// import { useDispatch, useSelector } from 'react-redux';
// import { Images } from '../../assets/images';
// import { getStatusBarHeight } from '../../components/config';
// import { commonStyles } from '../../components/config/colors';
// import { RNImage } from '../../components/image/RNImage';
// import { Text } from '../../components/text/Text';
// import { GetAvatar, LogoutWithUser } from '../../modules/auth/actions';
// import * as apiService from '../../modules/auth/service';
// import { ReSetStore } from '../../modules/common/actions';
// import FontSize from '../../utils/FontSize';
// import ConfigScreen from '../ConfigScreen';

const data = [
    {
        id: 1,
        name: 'Trang chủ',
        icon: Images.icHome,
        screen: 'Drawer',
    },
    {
        id: 2,
        name: 'Giới thiệu',
        // icon: Images.icDanhSachNghiPhep,
        icon: Images.icTongQuan,
        screen: ConfigScreen.DrawerIntroApp,
    },
    {
        id: 3,
        name: 'Version',
        // icon: Images.icDanhSachNghiPhep,
        icon: Images.icDonors,
        screen: ConfigScreen.DrawerVersionApp,
    }
];

const onPressItem = (item, props) => {
    if (item.screen) {
        Utils.navigate(item.screen);
        // props.navigation.navigate(item.screen)
    }
    else {
        // showMessage({
        //     message: 'Thông báo',
        //     description: 'Chức năng sắp ra mắt',
        //     icon: 'info',
        //     duration: 3000,
        //     type: 'info',
        // });
        alert('Chức năng sắp ra mắt')
    }
};

const DrawerCustom = props => {
    const theme = useTheme();
    // const dispatch = useDispatch();
    const resetAction = StackActions.replace('Root.Auth');

    const RenderMenu = (item, index) => {
        return (
            <View
                key={index}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: index == 0 ? '#F58220' : 'white',
                }}>
                <TouchableOpacity
                    onPress={() => onPressItem(item, props)}
                    style={{
                        width: '100%',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        alignItems: 'center',
                        flexDirection: 'row',
                        // justifyContent: 'center'
                    }}>
                    <Image
                        style={{ width: 20, height: 20, tintColor: 'black' }}
                        source={item.icon}
                    />
                    <Text

                        style={{
                            color: 'black',
                            paddingHorizontal: 20,
                        }}>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };
    return (
        <View
            style={[
                {
                    paddingTop: getStatusBarHeight() + 30,
                    flex: 1,
                    backgroundColor: 'grey',
                    paddingBottom: getBottomSpace() / 2,
                    backgroundColor: 'transparent',
                },
            ]}>
            {/* <Text> DrawerCustom </Text> */}
            <View
                style={{
                    flex: 1,
                    // backgroundColor: theme.colors.white,
                    borderRadius: 5,
                }}>
                <View style={{ flex: 1, borderRadius: 5 }}>
                    <View style={{
                        // paddingVertical: FontSize.verticalScale(15)
                    }}>
                        <View
                            style={{
                                // paddingVertical: FontSize.verticalScale(5),
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 5,
                                paddingHorizontal: 10
                                // paddingHorizontal: FontSize.scale(10),
                            }}>
                            <View
                                style={{
                                    borderRadius: 31,
                                    borderWidth: 0.5,
                                    width: 62,
                                    height: 62,
                                    borderColor: 'white',
                                }}>
                                <Image
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: 50,
                                    }}
                                    resizeMode='stretch'
                                    source={Images.V3App}
                                />
                                <View
                                    style={{
                                        position: 'absolute',
                                        bottom: -5,
                                        padding: 5,
                                        // backgroundColor: theme.colors.black_20,
                                        right: -10,
                                        borderRadius: 20,
                                    }}>
                                    <View style={{
                                        height: 10, width: 10, borderRadius: 25,
                                        backgroundColor: 'green'
                                    }} />
                                </View>
                            </View>

                            <View
                                style={{
                                    paddingHorizontal: 15
                                    // paddingHorizontal: FontSize.scale(15),
                                }}>
                                <Text style={{ color: theme.colors.main, fontWeight: 'bold', fontSize: 15 }}>
                                    {'Lý Xuân Thành'}
                                </Text>
                                <Text style={{ color: colors.colors.grayLight, fontWeight: 'bold', fontSize: 13, paddingVertical: 4 }}>
                                    {'Welcome'}
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Drawer.Profile')}
                            style={{
                                padding: 5,
                                borderRadius: 5,
                                paddingHorizontal: 20,
                                marginVertical: 5,
                                // backgroundColor: colors.colors.blueTwo,
                                // marginVertical: FontSize.verticalScale(5),
                                backgroundColor: theme.colors.turquoiseBlue_10,
                            }}>
                            <Text style={{ color: colors.colors.black_facebook }}>
                                {'Thông tin tài khoản'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            borderTopWidth: 1,
                            paddingVertical: 10,
                            borderBlockColor: 'black',
                            // paddingVertical: FontSize.verticalScale(10),
                            // borderColor: theme.colors.black_20,
                        }}>
                        {data.map(RenderMenu)}
                    </View>

                </View>

                <TouchableOpacity
                    // onPress={LogOut}
                    style={{
                        alignContent: 'flex-end',
                        width: '100%',
                        paddingVertical: 15,
                        alignItems: 'center',
                        borderTopWidth: 1,
                        // borderColor: theme.colors.black_20,
                        // backgroundColor: theme.colors.backgroundModal,
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>

                    <Image
                        style={{ width: 20, height: 20, }}
                        source={Images.icLogOut}
                    />
                    <Text
                        style={{
                            // color: theme.colors.colorSalmon,
                            color: 'black',
                            paddingHorizontal: 10,
                        }}>
                        {'Logout'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default DrawerCustom;
