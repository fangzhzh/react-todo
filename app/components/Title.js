import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        padding: 16,

    },
    title: {
        textAlign: 'center',
        color: 'white',
    },
})

export default class Title extends Component {
  render() {
    return (
        <View  style={styles.header}>
            <Text style={styles.title}>
                Todo List
            </Text>
        </View>
    )
  }
}
