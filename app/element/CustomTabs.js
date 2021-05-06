import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Tab } from 'react-native-elements';

const CustomTabs = () => {

    const [index, setIndex] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
            <Tab

                variant={"primary"}
                indicatorStyle={{ borderColor: "#f00", height: 10 }}
            >
                <Tab.Item title="Recent" />
                <Tab.Item title="favourite" />
                <Tab.Item title="cart" />
            </Tab>
        </SafeAreaView>
    )
}

export default CustomTabs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
});