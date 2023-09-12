import { View, Text, Button } from 'react-native'
import React from 'react'
import Utils from '../utils'

const Home = (props) => {
    console.log(props.navigation)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Detail')}
            />
            <Button
                title="Go to Drawer"
                onPress={() => props.navigation.navigate('Drawer')}
            />
        </View>
    )
}

export default Home