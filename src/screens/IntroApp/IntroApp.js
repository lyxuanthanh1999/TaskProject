import { View, Text, Button } from 'react-native'
import React from 'react'

const IntroApp = (props) => {
    console.log(props.navigation)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>IntroApp</Text>

        </View>
    )
}

export default IntroApp