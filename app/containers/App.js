import React, { Component, PropTypes } from 'react'
import { View, ScrollView, StyleSheet, TextInput, Text } from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import  List  from '../components/List'
import Title from '../components/Title.js'
import Input from '../components/Input.js'
import Footer from '../components/Footer.js'

import { actionCreators } from '../redux/todoRedux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {

  onSubmitEditing = (text) => {
    const {dispatch} = this.props
    dispatch(actionCreators.addItem(text))
  }

  onLongPress = (item, i) => {
    const {dispatch} = this.props
    dispatch(actionCreators.toggleItem(item, i))
  }

  onDeleteCompletedPress = () => {
    const {dispatch} = this.props;
    dispatch(actionCreators.deleteFinished())
  }
  
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const {items} = this.props
    return (
      <View style={styles.container}>
        <Title />
        <Input
        onSubmitEditing={this.onSubmitEditing}/>
          <List
          items={items}
          onLongPress={this.onLongPress}
        />
        <Footer
          onPress={this.onDeleteCompletedPress}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(App)
