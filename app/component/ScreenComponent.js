/**
 * component for screen container
 * @author m.reza
 */
import React from 'react';
import { View, SafeAreaView, Platform } from 'react-native';

/**
 * Screen component
 * @param {type} children  
 * @returns View
 */
const Screen = ({ Children }) => {

    if (Platform.OS === "ios") {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {Children}
                </View>
            </SafeAreaView>
        )
    }
    if (Platform.OS === "android") {
        return (
            <View style={{ flex: 1 }}>
                {Children}
            </View>
        )
    }

}

export default Screen
