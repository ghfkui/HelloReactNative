import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
} from 'react-native'

import AttachmentList from './AttachmentList'

export default class AttachmentView extends Component {
  render() {
    const { onClickAttachmentItem } = this.props
    return (
       <View style={styles.container}>
          <TextInput placeholder='Search...'></TextInput>
          <AttachmentList onClickDetail={onClickAttachmentItem} />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})