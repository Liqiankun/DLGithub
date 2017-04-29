import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ListView,
  RefreshControl,
} from 'react-native';

import NavigationBar from '../Common/NavigationBar'
import HomePage from './HomePage'
import DataTool from '../expand/DataTool/DataTool' 
import ScrollableTabView , {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import ListViewCell from '../Common/ListViewCell'

const BASE_URL = 'https://api.github.com/search/repositories?q=';
const SORT_KEY = '&sort=star';

export default class WelcomePage extends Component{

	constructor (props) {
		super(props);
		this.state = {
			text:'',
			result:'',
		};
	}

	render(){
		return (
			<View style={{backgroundColor:'white',flex:1}}>
				<NavigationBar
					name={'Popular'}
					style={{
						backgroundColor:'turquoise'
					}}
					statusBar={{
						backgroundColor:'turquoise',
						hidden:false
					}}
				/>

				<ScrollableTabView
					tabBarInactiveTextColor = 'mintcream'
					tabBarActiveTextColor = 'white'
					tabBarUnderlineStyle = {{backgroundColor:'white',height:2}}
					renderTabBar = {() => <ScrollableTabBar style={{backgroundColor:'turquoise'}}/>}
				>
					<PopularTabView tabLabel="IOS"></PopularTabView>
					<PopularTabView tabLabel="Android"></PopularTabView>
					<PopularTabView tabLabel="React"></PopularTabView>
				</ScrollableTabView>

			</View>
		)
	}
}


class PopularTabView extends Component{

	constructor (props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1!==r2}),
			result:'',
			isLoading:false,
		};
		this.dataTool = new DataTool();
	}

	componentDidMount () {
		this.loadData() 
	}

	loadData () {
		this.setState({
			isLoading:true
		})
		let url = this.getUrl(this.props.tabLabel);
		this.dataTool.fetchNetworking(url)
					 .then(result => {
					 	this.setState({
					 		dataSource:this.state.dataSource.cloneWithRows(result.items),
					 		isLoading: false,
					 	})
					 })
					 .catch(error => {
					 	this.setState({
					 		result:JSON.stringify(error),
					 		isLoading: false,
					 	})
					 })
	}

	getUrl(keyword){
		return BASE_URL + keyword + SORT_KEY;
	}

	renderRow (data) {
		return <ListViewCell data={data} />
	}

	render () {
		return (
			<View style={{backgroundColor:'white',flex:1}}>
				<ListView
					dataSource = {this.state.dataSource}
					renderRow = {(data) => this.renderRow(data)}
					refreshControl ={
						<RefreshControl
							refreshing = {this.state.isLoading}
							onRefresh = {() => this.loadData()}
							tintColor = {'turquoise'}
						/>
					}
				/>
			</View>
		)
	}

}
















