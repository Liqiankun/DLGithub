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
//import NavigationBar from './NavigationBar';
import ListViewCom from './ListView';
import FetchTest from './FetchTest';
import ImageCrop from './ImageCrop';
import Setup from './JS/Page/Setup';
const ASPECT_X="2";
const ASPECT_Y="1";

export default class ReactNativeApp extends Component {

   

  chooseImage () {
      let x=this.aspectX?this.aspectX:ASPECT_X;
        let y=this.aspectY?this.aspectY:ASPECT_Y;
        ImageCrop.selectWithCrop(parseInt(x),parseInt(y)).then(result=> {
            this.setState({
                result: result['imageUrl']?result['imageUrl']:result
            })
        }).catch(e=> {6
            this.setState({
                result: e
            })
        });
  }

  render() {
      let imageUrl = this.state.result
      let imageView = this.state.result === "" ? null :<Image resizeMode='center' style={{width:200,height:200}} source={{uri:imageUrl}}/>
    return (
        <View style={styles.container}>
          <Text 
          onPress={()=> this.chooseImage()}
          >选择图片
          </Text>
          <Text>{this.state.result}</Text>
          {imageView}
        </View>
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
  },
  listView:{
    flex:1,
  }
});



AppRegistry.registerComponent('ReactNativeApp', () => Setup);

        //    <Navigator
        //   initialRoute={{
        //     component:Body
        //   }}
        //   renderScene={(route,navigator)=>{
        //     let Component = route.component
        //     return <Component navigator={navigator} {...route.params}/>
        //   }}
        // >
        // </Navigator>
       

