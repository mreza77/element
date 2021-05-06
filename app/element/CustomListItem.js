import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'


const CustomListItem = () => {

    const list = [
        {
            name: 'Amy Farha',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            subtitle: 'Vice President'
        },
        {
            name: 'Chris Jackson',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            subtitle: 'Vice Chairman'
        }
    ]


    return (
        <SafeAreaView style={styles.container}>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider>
                        <Avatar source={{ uri: l.avatar_url }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.name}</ListItem.Title>
                            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </SafeAreaView>
    )
}

export default CustomListItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    }
});