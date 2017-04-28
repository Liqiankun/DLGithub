import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';


var data={
	'result':[
		{
			'name':'David',
			'number':'101',
		},

		{
			'name':'David',
			'number':'102',
		},

		{
			'name':'David',
			'number':'103',
		},

		{
			'name':'David',
			'number':'104',
		},

		{
			'name':'David',
			'number':'105',
		},

		{
			'name':'David',
			'number':'106',
		}
	]
}

import NavigationBar from './NavigationBar'

export default class ListViewCom extends Component{

	constructor(props){
		super(props);
		const ds= new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
		this.state = {
			dataSource: ds.cloneWithRows(data.result),
			isLoading: true
		}
		this.loadData();
	}

	renderRow (item) {
		return <TouchableOpacity
			onPress={()=>{
				console.log(item.number)
			}}
			>
			<View style={styles.row}>
			<Text style={styles.tips}>{item.name}</Text>
			<Text style={styles.tips}>{item.number}</Text>
		</View>
		</TouchableOpacity>
	}

	renderSeparator (sectionID, rowID, adjacentRowHighlighted) {
		return <View key={rowID} style={styles.line}></View>
	}

	renderFooter () {
		return <Image style={{width:100,height:100}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493295652491&di=29cf11939bc64b12a247d30cdb51b3d9&imgtype=0&src=http%3A%2F%2Fwww.zzmeidun.com%2Fupload%2Fimg%2F99GI0IZMxNKw3hfPpivZPc6vZIoRt-5eo3E0UHVBTkBdSpe5JGV9IEmNcJvWlib6NfHkCgbjhp85Oi8AuzQWN7UdmgGYvp5CbtxfLgYYn3njy%2Fxi6PYrvEL1OBtoig0-PfJwCVLCKA8q.jpg'}}></Image>
	}

	loadData () {
		setTimeout(() => {
			this.setState({
				isLoading:false
			})
		},2000)
	}

	render(){
		return (
			<View>
				<NavigationBar
					name={'ListView'}
					style={{
						backgroundColor: 'red',
					}}
				/>
				<ListView 
					dataSource = {this.state.dataSource}
					renderRow = {(item) => this.renderRow(item)}
					renderSeparator = {(sectionID, rowID, adjacentRowHighlighted)=> this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
					renderFooter = {() => this.renderFooter()}
					refreshControl = {
			          <RefreshControl
			            refreshing={this.state.isLoading}
			            onRefresh={() => this.loadData()}
			          />
			        }
				/>
			</View>
		)
	}
}




const styles=StyleSheet.create({
	line:{
		backgroundColor:'red',
		height:1,
	},

	tips:{
		fontSize:18,
	},
	row:{
		height:50,
	}
})