import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import NavigationBar from './NavigationBar'
import DLNetworking from './DLNetworking'
export default class FetchTest extends Component {

	constructor(props){
		super(props);
		this.state = {
			result:'',
		}
	}

	loadData (url) {
		DLNetworking.get(url)
  					.then(result=>{
  						this.setState({
							result: JSON.stringify(result)
						})
  					})
  					.catch((error) => {
        				console.error(error);
      				});
	}

	render () {
		return (
			<View style={styles.container}>
				<NavigationBar
					name={'Fetch'}
					style={{
						backgroundColor:'red'
					}}
					statusBar={{
						backgroundColor:'red',
						hidden:false
					}}
				/>
				<Text style={styles.text} onPress={() => this.loadData('https://www.easy-mock.com/mock/5902ba8b7a878d73716deb26/react_native_app_test_url/list_of_user')}>请求数据</Text>
				<Text>请求结果{this.state.result}</Text>
			</View>
		)
	}
}


const styles=StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'gray',
	},
	text:{
		fontSize:20,
	}

})
