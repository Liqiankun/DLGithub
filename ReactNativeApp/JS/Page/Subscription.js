import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import NavigationBar from '../Common/NavigationBar'
import ViewTool from '../Common/ViewTool'
export default class Subscription extends Component{

	constructor (props) {
		super(props);
		this.state = {
		};
	}

	onSave () {
		this.props.navigator.pop()
	}

	render(){
		let rightBarButtonItem = <TouchableOpacity 
									style = {{margin:10}}
									onPress={() => this.onSave()}
								 >
								 <Text style={{color:'white',fontSize:16}}>Save</Text>
								 </TouchableOpacity>
		return (
			<View style={{backgroundColor:'white',flex:1}}>
				<NavigationBar
					name={'Subscription'}
					style={{
						backgroundColor:'turquoise'
					}}
					statusBar={{
						backgroundColor:'turquoise',
						hidden:false
					}}

					leftButton = {ViewTool.backBarButtonItem(()=>this.onSave())}
					rightButton = {rightBarButtonItem}
				/>
				<ScrollView>
				</ScrollView>
			</View>
		)
	}
}

