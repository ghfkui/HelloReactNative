import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native'

class SideBar extends Component {
  render() {
    const { show, onClickShadow, children } = this.props
    const patchStyles = show ? {left: 0} : undefined 
    return (
      <View style={[styles.container, patchStyles]}>
        <View style={styles.content}>
          {children}
        </View>
        <TouchableWithoutFeedback onPress={this.props.onClickShadow}>
          <View style={styles.shadow}></View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const { windowWdith, windowHeight} = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    left: -windowWdith,
    top: 50, 
    width: windowWdith,
    height: windowHeight - 50,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    width: windowWdith * .2,
    backgroundColor: '#ddd',
    opacity: .5,
  },
})

export default SideBar