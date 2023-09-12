import { View, Text, Button } from 'react-native'
import React from 'react'

const Detail = (props) => {
    const { navigation } = props
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Detail')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Detail