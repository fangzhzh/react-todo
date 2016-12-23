import React, { Component, PropTypes } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
})


export default class Input extends Component {
  state = {
    text: ''
  }

  onChangeText = (text) => {
    this.setState({text})
  }

  onSubmit = () => {
    const {onSubmitEditing} = this.props
    const {text} = this.state
    if(!text) return;
    onSubmitEditing(text)
    this.setState({text: ''})
  }

  render() {
    const {text} = this.state
    return (
        <View>
            <TextInput
             placeholder='Temp'
             value={text}
             onChangeText={this.onChangeText}
             autoCapitalize='sentences'
             onSubmitEditing={this.onSubmit}
            />
        </View>
    )
  }
}
