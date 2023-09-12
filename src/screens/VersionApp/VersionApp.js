import { View, Text, Button } from 'react-native'
import React from 'react'

const VersionApp = (props) => {
    console.log(props.navigation)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>VersionApp</Text>

        </View>
    )
}

export default VersionApp