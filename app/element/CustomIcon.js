import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements'

const CustomIcon = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Icon
                name='rowing' />

            <Icon
                name='g-translate'
                color='#00aced' />

            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
            />
            <Icon
                reverse
                name='ios-american-football'
                type='ionicon'
                color='#517fa4'
            />

            <Icon
                raised
                name='heartbeat'
                type='font-awesome-5'
                color='#f50'
                onPress={() => console.log('hello')} />
        </SafeAreaView>
    )
}

export default CustomIcon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});