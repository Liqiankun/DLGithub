import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import NavigationBar from '../Common/NavigationBar';
import ArrayTool from '../expand/DataTool/ArrayTool';
import ViewTool from '../Common/ViewTool';
import LanguageData,{FLAG_LANGUAGE} from '../expand/DataTool/LanguageData';
import CheckBox from 'react-native-check-box';

export default class Subscription extends Component{

	constructor (props) {
		super(props);
		this.changeValues = [];
		this.state = {
			dataArray:[],
		};
		this.languageData = new LanguageData(FLAG_LANGUAGE.flag_key)
	}

	componentDidMount(){
		this.loadData()
	}

	lastView(len){
		if (len % 2 === 0) {
			return this.renderCheckBox(this.state.dataArray[len - 2])
		}
	}

	onClick(data){
		data.checked = !data.checked;
		ArrayTool.updateArray(this.changeValues,data)
	}

	renderCheckBox(data){
		let text = data.name;
		return <CheckBox style={{flex:1,padding:10}}
					onClick={() => this.onClick(data)}
					leftText={text}
					isChecked={data.checked}
					checkedImage={<Image style={styles.image} source={require('../../res/images/ic_check_box.png')} />}
					unCheckedImage={<Image style={styles.image} source={require('../../res/images/ic_check_box_outline_blank.png')} />}
			   />
	}

	renderView () {
		if (!this.state.dataArray || this.state.dataArray.length === 0) return null;
		let len = this.state.dataArray.length;
		let views = [];
		for (let i = 0,l=len-2;i<l;i+=2){
			views.push(
				<View key={i}>
					<View style={styles.item}>
						{this.renderCheckBox(this.state.dataArray[i])}
						{this.renderCheckBox(this.state.dataArray[i+1])}
					</View>
					<View style={styles.line}></View>
				</View>
			)
		}
		views.push(
			<View key={len - 1}>
				<View style={styles.item}>
					{this.lastView(len)}
					{this.renderCheckBox(this.state.dataArray[len - 1])}
				</View>
				<View style={styles.line}></View>
			</View>
		)
		return views;
	}

	loadData(){
		this.languageData.fetch()
						 .then(result => {
						 	this.setState({
						 		dataArray:result
						 	})
						 })
						 .catch(error =>{
						 	console.log(error)
						 })
	}

	onBack(){
		if (this.changeValues.length === 0) {
			this.props.navigator.pop()
		}else{
			Alert.alert(
				  '提示',
				  '是否保存',
				  [
				    {text: '不保存', onPress: () => this.onSave(false), style: 'cancel'},
				    {text: '保存', onPress: () => this.onSave(true)},
				  ],
				  { cancelable: false }
			)
		}
	}

	onSave (save) {
		if (save) {this.languageData.onSave(this.state.dataArray)}
		this.props.navigator.pop()
	}

	render(){
		let rightBarButtonItem = <TouchableOpacity 
									style = {{margin:10}}
									onPress={() => this.onBack()}
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

					leftButton = {ViewTool.backBarButtonItem(()=>this.onBack())}
					rightButton = {rightBarButtonItem}
				/>
				<ScrollView>
				{this.renderView()}
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  line:{
  	height:0.3,
  	backgroundColor:'#dddddd',
  },
  item: {
        flexDirection: 'row',
  },
  image:{
  	tintColor:'turquoise',
  }
});


