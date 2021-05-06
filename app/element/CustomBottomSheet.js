
import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheet, ListItem, FAB } from 'react-native-elements'


const CustomBottomSheet = () => {

    const [isVisible, setIsVisible] = useState(false)
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];


    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => setIsVisible(true)}
                style={{ backgroundColor: "#f00", width: "20%", height: "8%" }}
            ></TouchableOpacity>
            <FAB
                title="Create"
                placement={'left'}
                visible
                upperCase
                overlayColor={"#f00"}
                onPress={() => setIsVisible(true)}
            />
            <BottomSheet
                isVisible={isVisible}
                containerStyle={{ backgroundColor: "rgba(0.5,0.25,0,0.1" }}
                modalProps={{ animationType: "slide" }}
            >
                {list.map((l, i) => (
                    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </BottomSheet>
        </SafeAreaView>
    )
}

export default CustomBottomSheet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});