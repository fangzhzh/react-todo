import React, { Component, PropTypes } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      paddingVertical: 15,
       alignItems: 'center'
    },
    footer: {
        color: 'red',
    }

})

export default class Footer extends Component {
  render() {
    const {onPress} = this.props
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.footer}
              onPress={onPress}>
                Remove completed items
            </Text>
        </TouchableOpacity>
    )
  }
}
