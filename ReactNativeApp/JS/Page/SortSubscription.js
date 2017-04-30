import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import LanguageData,{FLAG_LANGUAGE} from '../expand/DataTool/LanguageData';
import SortableListView from 'react-native-sortable-listview';
import NavigationBar from '../Common/NavigationBar';
import ViewTool from '../Common/ViewTool';
import ArrayTool from '../expand/DataTool/ArrayTool';

export default class SortSubscription extends Component{
	constructor(props){
		super(props);
		this.dataArray = [];
		this.sortArray = [];
		this.originalCheckedArray = [];
		this.state = {
			checkedArray:[]
		}
		this.languageData = new LanguageData(FLAG_LANGUAGE.flag_key)
	}

	componentDidMount(){
		this.loadData()
	}

	loadData(){
		this.languageData.fetch()
						 .then(result => {
						 	this.getCheckedItems(result)
						 })
						 .catch(error =>{
						 	console.log(error)
						 })
	}

	getCheckedItems(data){
		this.dataArray = data;
		let checkedArray = [];
		for(var i = 0,len = data.length; i < len; i++){
			let item = data[i]
			if(item.checked){
				checkedArray[i] = item
			}
		}
		this.setState({
			checkedArray:checkedArray,
		})

		this.originalCheckedArray = ArrayTool.cloneArray(checkedArray)
	}

	onBack () {
		this.props.navigator.pop()
	}

	render (){
		let order = Object.keys(this.state.checkedArray)
		let rightBarButtonItem = <TouchableOpacity 
								style = {{margin:10}}
								onPress={() => this.onBack()}
							 	>
							 		<Text style={{color:'white',fontSize:16}}>Save</Text>
							 	</TouchableOpacity>
		return (
        <View style={{backgroundColor:'white',flex:1}}>
			<NavigationBar
				name={'SortSubscription'}
				style={{
					backgroundColor:'turquoise'
				}}
				statusBar={{
					backgroundColor:'turquoise',
					hidden:false
				}}

				leftButton = {ViewTool.backBarButtonItem(()=>this.onBack())}
				rightButton = {rightBarButtonItem}
			/>
			<SortableListView
	          style={{flex: 1}}
	          data={this.state.checkedArray}
	          order={order}
	          onRowMoved={e => {
	            order.splice(e.to, 0, order.splice(e.from, 1)[0]);
	          }}
	          renderRow={row => <SortCell data={row} />}
        	/>
		</View>
		) 
	}
}

class SortCell extends Component{

	render(){
		return (
			<TouchableHighlight
		        underlayColor={'#eee'}
		        delayLongPress={500}
		        style={styles.item}
		        {...this.props.sortHandlers}
      		>
      			<View style={{flexDirection:'row',alignItems:'center'}}>
      				<Image style={styles.image} source={require('../../res/images/ic_sort.png')}/>
        			<Text style={{marginLeft:10}}>{this.props.data.name}</Text>
      			</View>
      		</TouchableHighlight>
		)
	}
}


const styles = StyleSheet.create({
  line:{
  	height:0.3,
  	backgroundColor:'#dddddd',
  },
  item:{
  	padding: 15, 
  	backgroundColor: "white",
  	borderBottomWidth:1, 
  	borderColor: '#eee',
  },
  image:{
  	height:20,
  	width:20,
  	tintColor:'turquoise'
  }
});














