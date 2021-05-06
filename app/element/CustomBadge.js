import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Avatar, Badge } from 'react-native-elements'


const CustomBadge = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Badge Component={TouchableOpacity} value="99+" status="error" />
            <Badge value={<Text>My Custom Badge</Text>} />
            <Badge status="warning" />
            <View>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="large"
                />
                <Badge
                    badgeStyle={{}}
                    status="success"
                    containerStyle={{ position: 'absolute', top: +8, right: +350 }}
                />
            </View>

        </SafeAreaView>
    )
}

export default CustomBadge

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});