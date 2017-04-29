 import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Girl from './Girl'

//import NavigationBar from './NavigationBar'


export default class Body extends Component{
	constructor(props){
		super(props);
		this.state = {
			word:'',
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<NavigationBar
					name={'Boby'}
					style={{
						backgroundColor:'red'
					}}
					statusBar={{
						backgroundColor:'red',
						hidden:false
					}}
				/>
				<Text style={styles.text}>I am boy</Text>
				<Text 
				style={styles.text} 
				onPress={()=>{
					 this.props.navigator.push({
					 	component: Girl,
					 	params:{
					 		word:'hahaha',
					 		onCallBack:(word)=>{
					 			this.setState({
					 				word:word,
					 			})
					 		}
					 	}
					 })
				}}
				>This is a flower</Text>
				<Text sytle={styles.text}>{this.state.word}</Text>
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