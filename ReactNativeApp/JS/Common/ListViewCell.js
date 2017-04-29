import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ListViewCell extends Component{
	render () {
		return (
			<TouchableOpacity style={styles.container}>
				<View style={styles.content}>
					<View>
						<Text style={styles.title} >{this.props.data.full_name}</Text>
					 	<Text style={styles.description} >{this.props.data.description}</Text>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
						<View style={{alignItems:'center',flexDirection:'row'}}>
							<Text>Author:</Text>
							<Image style={{height:22,width:22}} source={{uri:this.props.data.owner.avatar_url}} />
						</View>
						<View style={{alignItems:'center',flexDirection:'row'}}>
							<Text>Star:</Text>
							<Text>{this.props.data.stargazers_count}</Text>
						</View>
						<Image style = {{height:22,width:22,alignItems:'center'}} source={require('../../res/images/ic_star.png')} />
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	title:{
		fontSize:16,
		marginBottom:5,
		color:'#212121',	
	},
	description:{
		fontSize:14,
		marginBottom:5,
		color:'#757575',
	},
	content:{
		backgroundColor:'white',
		padding:10,
		marginLeft:5,
		marginRight:5,
		marginVertical:3,
		borderWidth:0.5,
		borderRadius:3,
		borderColor:'#dddddd',
		shadowColor:'gray',
		shadowOffset:{width:0.5,height:0.5},
		shadowOpacity:0.4,
		shadowRadius:1,
	}

})
