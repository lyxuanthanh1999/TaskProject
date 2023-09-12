import { View, Text, Button } from 'react-native'
import React from 'react'

const Language = (props) => {
    console.log(props.navigation)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Language</Text>

        </View>
    )
}

export default Language