import { View, Text, TouchableOpacity, FlatList, Dimensions, ImageBackground, StyleSheet } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { colors, lightColors } from '../../Components'
import LinearGradient from 'react-native-linear-gradient'
import { Images } from '../../assets/Index'
import { data } from './indexData'
import { useSelector } from 'react-redux'
import Utils from '../../utils'
const arrDefaultColors = ['#1A1A1A', '#1A1A1A']
const arrChooosedColors = ['#8A32A9', '#8A00FF', '#8A00FF', '#FFFFF0',]
const HomeScreen = (props) => {


    const _state = useSelector(state => state)

    console.log(_state.AuthReducer.isCheckToken)
    console.log('[STATE HOMESCREEN] : ', _state.AuthReducer.infoUser)

    const [DATA, setDATA] = useState([])
    // const [DATA, setDATA] = useState(() => {
    //     let temp = data.map((item, index) => {
    //         return { ...item, Selected: false }
    //     })
    //     return temp

    // })
    useEffect(async () => {
        const { accessToken } = _state?.AuthReducer?.infoUser || ''
        let res = await getCategories(accessToken)
        console.log('res useEffect : ', res)
        let temp = res.map((item, index) => {
            return { ...item, Selected: false }
        })
        setDATA(temp)

    }, [_state])
    const getCategories = async (accessToken) => {

        const domain = 'http://streaming.nexlesoft.com:3001'
        try {
            const res = await Utils.get_api(`${domain}/categories`, false, true, `Bearer ${accessToken}`);
            if (res.statusCode === 401) {
                console.log('Sai thông tin tài khoản');
                return [];
            } else {
                return res;
            }
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error(error);
            return [];
        }
    };
    const selectItem = useCallback(
        (item, index) => {
            const updatedData = DATA.reduce((acc, e) => {
                acc.push({
                    ...e,
                    Selected: e.id === item.id ? !e.Selected : e.Selected,
                })
                return acc
            }, [])
            setDATA(updatedData);
        }, [DATA],
    )

    const ItemSub = React.memo(({ item, index, selectItem }) => {
        return (
            <TouchableOpacity
                onPress={() => selectItem(item, index)}
            >
                <LinearGradient
                    colors={!item.Selected ? arrDefaultColors : arrChooosedColors}
                    useAngle={true}
                    angle={30} // Điều chỉnh góc theo ý muốn
                    locations={[0, 0.5, 0.6]}
                    style={[styles.stItem, {
                        borderWidth: !item.Selected ? 0.6 : 0,
                        borderColor: !item.Selected ? 'transparent' : colors.colors.grayLight
                    }]}>
                    <Text style={[styles.stTxt]}>{item.name}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    });

    return (
        <ImageBackground source={Images.BG1} style={{ flex: 1, justifyContent: 'center' }}>

            <FlatList
                ListHeaderComponent={() => {
                    return <View style={[styles.stViewHeaderFlatList]}>
                        <Text style={[styles.stTextHeaderFlatList]}>{'Wellcome to Nexle Entrance Test'}</Text>
                        <View style={[styles.stSubTextHeaderFlatList]}>
                            <Text style={{ fontSize: 14, fontWeight: '400', color: 'white' }} numberOfLines={2}>{'Please select categories what you would like to see on your feed. You can set this later on Filter.'}</Text>
                        </View>
                    </View>
                }}
                style={{
                    borderRadius: 3,
                    paddingVertical: 10, marginTop: 40
                }}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                data={DATA && DATA.length > 0 ? DATA : []}
                // renderItem={_RenderItem}
                renderItem={({ item, index }) => <ItemSub item={item} index={index} selectItem={selectItem} />}
                extraData={DATA}
                initialNumToRender={10} // Số lượng item render lúc ban đầu
                maxToRenderPerBatch={5} // Số lượng item trong mỗi lần batch
                windowSize={10} // Số lượng item hiển thị cùng lúc trên màn hình

            />
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    stItem: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: 71,
        width: (Dimensions.get('window').width - 60) / 3,
        borderRadius: 8,
        alignItems: 'center', justifyContent: 'center',
        margin: 10,
    },
    stTxt: { color: 'white', fontSize: 14 },
    stViewHeaderFlatList: {
        paddingVertical: 10, paddingHorizontal: 10
    },
    stTextHeaderFlatList: { fontSize: 22, fontWeight: 'bold', color: 'white' },
    stSubTextHeaderFlatList: { width: '100%', marginTop: 10 }

})
export default HomeScreen


              // const _RenderItem = ({ item, index }) => {
    //     return (
    //         <TouchableOpacity
    //             onPress={() => selectItem(item, index)}
    //         >
    //             <React.Fragment>
    //                 <LinearGradient
    //                     colors={!item.Selected ? ['#1A1A1A', '#1A1A1A'] : ['#8A32A9', '#8A00FF', '#8A00FF', '#FFFFF0',]}
    //                     useAngle={true}
    //                     angle={30} // Điều chỉnh góc theo ý muốn
    //                     locations={[0, 0.5, 0.6]}
    //                     style={[styles.stItem, {
    //                         borderWidth: !item.Selected ? 0.6 : 0,
    //                         borderColor: !item.Selected ? 'transparent' : colors.colors.grayLight
    //                     }]}>
    //                     <Text style={[styles.stTxt]}>{item.name}</Text>
    //                 </LinearGradient>
    //             </React.Fragment>
    //         </TouchableOpacity>
    //     );
    // };