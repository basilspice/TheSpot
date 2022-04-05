import React from 'react';
import {FlatList} from 'react-native'
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Post from '../components/Post';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: (require('../assets/basil.jpg'))
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: (require('../assets/basil.jpg'))
    },
]

function MessagesScreen(props) {
    return (
        <SafeAreaView style={styles.screen}>
        <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) =>
        <Post
        title={item.title}
        location={item.description}
        image={item.image} /> } />
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default MessagesScreen;