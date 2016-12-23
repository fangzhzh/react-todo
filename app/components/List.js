import React, { Component, PropTypes } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Checkbox from './Checkbox'
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white'
  },
  itemComplete: {
    backgroundColor: 'gray'
  }

})

export default class List extends Component {
  static proptypss = {
    items: PropTypes.array.isRequired,
    onLongPress: PropTypes.func.isRequired,
  }

  renderItem = (item, i) => {
    const {onLongPress} = this.props
    return (
      <TouchableOpacity
        style={(!item.completed) && styles.item || styles.itemComplete}>
        <Text
          onLongPress={() => onLongPress(item, i)}
          >{item.label}</Text>

      </TouchableOpacity>
    )
  }

  render() {
    const {items} = this.props
    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderItem)}
      </ScrollView>
  )
  }
}
