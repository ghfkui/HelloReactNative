import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Navigator,
  Image,
  TouchableHighlight,
} from 'react-native'

import SideBar from './components/SideBar'
import AttachmentView from './containers/AttachmentView'
import MailDetail from './containers/MailDetail'

const menuImg = require('../res/menu.png')
const backImg = require('../res/back.png')

const routes = [
  {title: 'Attachment View', index: 0},
  {title: 'Mail Detail', index: 1},
]
class App extends Component {
  constructor(props) {
    super(props)
    this.toggleSideBar = this.toggleSideBar.bind(this)
    this._renderScene = this._renderScene.bind(this)
    this.state = {
      showSideBar: false,
    }
  }
  toggleSideBar() {
    this.setState((prevState) => {
      return {
        showSideBar: !prevState.showSideBar,
      }
    })
  }
  _renderScene(route, navigator) {
    if (route.index === 0) {
      return (
        <AttachmentView 
          onClickAttachmentItem={() => navigator.push(routes[1])}
          showSideBar={this.state.showSideBar}
          onClickSideBarShadow={this.toggleSideBar}
        />
      )
    } else if (route.index === 1) {
      return <MailDetail />
    }
  }
  render() {
    const sideBarStyle = this.state.showSideBar ? {left: 0} : undefined
    return (
      <View style={styles.container}>
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar 
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (route.index === 0) {
                  return (
                    <TouchableHighlight onPress={this.toggleSideBar} underlayColor='#ccc'>
                      <Image source={menuImg}/>
                    </TouchableHighlight>
                  )
                } else if (route.index === 1) {
                   return (
                    <TouchableHighlight onPress={() => navigator.pop()}
                    underlayColor='#ccc'>
                      <Image source={backImg}/>
                    </TouchableHighlight>
                  )
                }
              },
              RightButton: (route, navigator, index, navState) =>
                { return null },
              Title: (route, navigator, index, navState) =>
                { return (<Text style={styles.navigationTitle}>{route.title}</Text>) },
            }}
            style={styles.navigationBar}
          />
        }
        style={styles.navigator}
      />
      <SideBar show={this.state.showSideBar} onClickShadow={this.toggleSideBar}/>
      </View>
    )
  }
}

const windowSize = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigator: {
    paddingTop: 50,
    backgroundColor: '#eee',
  },
  navigationBar: {
    backgroundColor: '#ddd',
    height: 50,
    borderStyle: 'solid',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  navigationTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
  },
})
export default App