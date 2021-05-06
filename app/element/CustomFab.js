import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FAB } from 'react-native-elements';

const CustomFab = () => {
    return (
        <View style={styles.container}>
            <FAB
                title="Create"
                placement={'left'}
                visible
                upperCase
                overlayColor={"#f00"}
            />
        </View>
    )
}

export default CustomFab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    }
});