import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Button
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['#2864F7', '#71A8FF'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                buttonStyle={{
                    height: 70, width: 200,
                }}
                containerStyle={{
                    marginTop: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30, borderTopRightRadius: 10
                }}
                title="element"
                icon={
                    <Icon
                        name='g-translate'
                        color='#00aced' />
                }
            ></Button>
            <Button
                title={"salam shoma"}
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />}
                TouchableComponent={TouchableOpacity}
                buttonStyle={{
                    borderBottomLeftRadius: 10, borderBottomRightRadius: 30,
                    borderTopLeftRadius: 30, borderTopRightRadius: 10
                }}
                containerStyle={{
                    marginTop: 50,
                    width: "70%",
                    height: "8%"
                }}
            ></Button>
            <Button
                title={"salam shoma"}
                loading
                loadingProps={{ color: "#f00", size: "large" }}
                raised
            ></Button>
        </SafeAreaView>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    viewHeader: {
        backgroundColor: "#aaa",
        width: "80%",
        height: "8%",
        borderRadius: 15,
    },
    reactNative: {
        width: "30%",
        height: "25%",
        backgroundColor: "#f00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    text: {
        color: "#fff",
        fontWeight: "600"
    }
});