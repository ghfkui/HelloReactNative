import React, { Component } from 'react'
import {
  View,
  TextInput,
} from 'react-native'

import AttachmentGrid from './AttachmentGrid'
import SideBar from './SideBar'

export default class ListScene extends Component {
  render() {
    const { showSideBar } = this.props 
    return (
      <View style={{flex:1}}>
        <TextInput></TextInput>
        <AttachmentGrid />
        {showSideBar ? <LeftPanel /> : undefined}
      </View>
    )
  }
}