import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
} from 'react-native';

import NavigationBar from '../Common/NavigationBar'
import Subscription from './Subscription'
export default class WelcomePage extends Component{

	constructor (props) {
		super(props);
		this.state = {
		};
	}

	gotoSubscription (){
		this.props.navigator.push({
			component:Subscription,
			params:{...this.props},
		})
	}

	render(){
		return (
			<View style={{backgroundColor:'white',flex:1}}>
				<NavigationBar
					name={'Me'}
					style={{
						backgroundColor:'turquoise'
					}}
					statusBar={{
						backgroundColor:'turquoise',
						hidden:false
					}}
				/>
				<Text 
					onPress={() => this.gotoSubscription()}
				>
				自定义标签
				</Text>
			</View>
		)
	}
}



