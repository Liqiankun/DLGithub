/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Body from './Body';
import NavigationBar from './NavigationBar'
export default class ReactNativeApp extends Component {

  constructor(props){
    super(props);
    this.state={
      selectedTab:'tb_popular',
    }
  }

  render() {
    return (
        <Navigator
          initialRoute={{
            component:Body
          }}
          renderScene={(route,navigator)=>{
            let Component = route.component
            return <Component navigator={navigator} {...route.params}/>
          }}
        >
        </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  page1:{
    flex:1,
    backgroundColor:'red',
  },
  page2:{
    flex:1,
    backgroundColor:'green',
  },
  image:{
    height:22,
    width:22,
  }
});



AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);


          /*<TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_popular'}
              selectedTitleStyle={{color:'red'}}
              title="Popular"
              renderIcon={() => <Image style={styles.image}  source={require('./res/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_polular.png')} />}
              //badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
              <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_trending'}
              selectedTitleStyle={{color:'red'}}
              title="Trending"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_trending.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_trending.png')} />}              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
              <View style={styles.page2}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favorite'}
              selectedTitleStyle={{color:'red'}}
              title="Favorite"
              renderIcon={() => <Image style={styles.image}  source={require('./res/images/ic_favorite.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_favorite.png')} />}
              //badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
              <View style={styles.page1}></View>
            </TabNavigator.Item>
            <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              selectedTitleStyle={{color:'red'}}
              title="My"
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_my.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'red'}]} source={require('./res/images/ic_my.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
              <View style={styles.page2}></View>
            </TabNavigator.Item>
        </TabNavigator>
        **/
