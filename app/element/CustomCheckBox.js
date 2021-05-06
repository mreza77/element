import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { CheckBox } from 'react-native-elements'

const CustomCheckBox = () => {

    const [checked, setChecked] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <CheckBox
                title='Click Here'
                checkedTitle="ok"
                checked={checked}
                center
                onPress={() => checked ? setChecked(false) : setChecked(true)}
                containerStyle={{ backgroundColor: "#fff", width: "20%", borderColor: "#fff" }}
                iconRight
            />
            <CheckBox
                title='Click Here'
                checked={true}
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
            />
            <CheckBox
                title='Click Here'
                checked={false}
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
            />
            <CheckBox
                center
                title='Click Here to Remove This Item'
                iconRight
                iconType='material'
                checkedIcon='clear'
                uncheckedIcon='add'
                checkedColor='red'
                checked={checked}
                onPress={() => checked ? setChecked(false) : setChecked(true)}
            />
        </SafeAreaView>
    )
}

export default CustomCheckBox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});