import React from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Avatar } from 'react-native-elements';

const CustomAvatar = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Avatar
                Component={TouchableOpacity}
                containerStyle={{ marginHorizontal: 20 }}
                titleStyle={{ fontSize: 20, fontWeight: "700" }}
                overlayContainerStyle={{ backgroundColor: 'blue' }}
                rounded
                ImageComponent={Image}
                size="large"
                title="mmzi"
                source={require("../../assets/splash.png")}
                icon={{ name: 'user', type: 'font-awesome' }}
                onPress={() => console.log("ok")}
                activeOpacity={0.4}
            />
        </SafeAreaView>
    )
}

export default CustomAvatar

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});