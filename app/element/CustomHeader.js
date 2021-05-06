import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

const CustomHeader = () => {
    return (
        <View style={styles.container}>
            <Header
                statusBarProps={{ barStyle: 'light-content' }}
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                containerStyle={{
                    backgroundColor: '#3D6DCC',
                    justifyContent: 'space-around',
                }}
            />
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});