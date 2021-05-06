import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { SpeedDial } from 'react-native-elements';


const CustomSpeedDial = () => {

    const [open, setOpen] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <SpeedDial
                open={open}
                icon={{ name: 'edit', color: '#fff' }}
                openIcon={{ name: 'close', color: '#fff' }}
                onChange={() => setOpen(true)}
            >
                <SpeedDial.Action
                    icon={{ name: 'add', color: '#fff' }}
                    title="Add"
                    onPress={() => console.log('Add Something')}
                />
                <SpeedDial.Action
                    icon={{ name: 'delete', color: '#fff' }}
                    title="Delete"
                    onPress={() => console.log('Delete Something')}
                />
            </SpeedDial>
        </SafeAreaView>
    )
}

export default CustomSpeedDial

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});