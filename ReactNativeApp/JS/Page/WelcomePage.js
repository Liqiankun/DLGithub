import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import NavigationBar from '../Common/NavigationBar'
import HomePage from './HomePage'
export default class WelcomePage extends Component{

	componentDidMount () {
		this.timer = setTimeout (() => {
			this.props.navigator.resetTo({
				component:HomePage
			})
		},2000)
	}

	componetWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}

	render(){
		return (
			<View style={{backgroundColor:'red',flex:1}}>
				<NavigationBar
					name={'ReavtNativeApp'}
					style={{
						backgroundColor:'turquoise'
					}}
					statusBar={{
						backgroundColor:'turquoise',
						hidden:false
					}}
				/>
				<Text>HomePage</Text>
			</View>
		)
	}
}
