import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image, 
} from 'react-native';

import NavigationBar from '../Common/NavigationBar'
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage'
import ProfilePage from './ProfilePage'
export default class HomePage extends Component{

	constructor(props){
	    super(props);
	    this.state={
	      selectedTab:'tb_popular',
	      result: '',
	    }
  	}

	componentDidMount () {
	
	}

	render(){
		return (
			<TabNavigator>
	            <TabNavigator.Item
	              selected={this.state.selectedTab === 'tb_popular'}
	              selectedTitleStyle={{color:'turquoise'}}
	              title="Popular"
	              renderIcon={() => <Image style={styles.image}  source={require('../../res/images/ic_polular.png')} />}
	              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'turquoise'}]} source={require('../../res/images/ic_polular.png')} />}
	              //badgeText="1"
	              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
	              <PopularPage style = {{flex:1}}/>
	            </TabNavigator.Item>
	            <TabNavigator.Item
	              selected={this.state.selectedTab === 'tb_trending'}
	              selectedTitleStyle={{color:'turquoise'}}
	              title="Trending"
	              renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
	              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'turquoise'}]} source={require('../../res/images/ic_trending.png')} />}              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
	              <View style={styles.page2}></View>
	            </TabNavigator.Item>
	            <TabNavigator.Item
	              selected={this.state.selectedTab === 'tb_favorite'}
	              selectedTitleStyle={{color:'turquoise'}}
	              title="Favorite"
	              renderIcon={() => <Image style={styles.image}  source={require('../../res/images/ic_favorite.png')} />}
	              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'turquoise'}]} source={require('../../res/images/ic_favorite.png')} />}
	              //badgeText="1"
	              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
	              <View style={styles.page1}></View>
	            </TabNavigator.Item>
	            <TabNavigator.Item
	              selected={this.state.selectedTab === 'tb_my'}
	              selectedTitleStyle={{color:'turquoise'}}
	              title="My"
	              renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')} />}
	              renderSelectedIcon={() => <Image style={[styles.image,{tintColor:'turquoise'}]} source={require('../../res/images/ic_my.png')} />}
	              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
	              <ProfilePage style = {{flex:1}} {...this.props}/>
	            </TabNavigator.Item>
        	</TabNavigator>
		)
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
