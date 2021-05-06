import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Input } from 'react-native-elements';


const CustomInput = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Input
                placeholder='INPUT WITH ICON'
                leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />
            <Input
                placeholder='INPUT WITH ERROR MESSAGE'
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                allowFontScaling
                autoCapitalize={"characters"}
            />
        </SafeAreaView>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});