import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

//import NavigationBar from './NavigationBar'

export default class Girl extends Component{

	renderButton(image){
		return <TouchableOpacity
			onPress={() => {
				this.props.navigator.pop();
			}}
		>
			<Image style={{width:22,height:22,margin:5}} source={image}></Image>
		</TouchableOpacity>
	}

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
					name = {'Girl'}

					style={{
						backgroundColor:'green'
					}}

					statusBar = {{
						backgroundColor:'green',
						hidden:false
					}}

					leftButton = {
						this.renderButton(require('./res/images/ic_arrow_back_white_36.png'))
					}

					rightButton = {
						this.renderButton(require('./res/images/ic_star.png'))
					}

				/>
				<Text style={styles.text}>I am Girl</Text>
				<Text style={styles.text}>{this.props.word}</Text>
				<Text 
					style={styles.text}
					onPress={()=>{
						this.props.onCallBack('送回一盒巧克力')
						this.props.navigator.pop()
					}}
				>送回去
				</Text>
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


//  <Text 
				// style={styles.text} 
				// onPress={()=>{
				// 	 this.props.navigator.push({
				// 	 	component: Girl
				// 	 	params:{
				// 	 		word:'Rose',
				// 	 		onCallBack:(word)=>{
				// 	 			this.setState({
				// 	 				word:word,
				// 	 			})
				// 	 		}
				// 	 	}
				// 	 })
				// }}
				// >This is a flower</Text>