import React, {Component,PropTypes} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
} from 'react-native';


const NAVIBAR_HEIGHT_IOS = 44;
const NAVIBAR_HEIGHT_ANDROID = 50;
const StatusBarShape = {
	backgroundColor:PropTypes.string,
	barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
	hidden: PropTypes.bool,
}
export default class NavigationBar extends Component{

	static propTypes = {
		style: View.propTypes.style,
		name: PropTypes.string,
		titleView: PropTypes.element,
		hide: PropTypes.bool,
		leftButton: PropTypes.element,
		rightButton: PropTypes.element,
		statusBar: PropTypes.shape(StatusBarShape),
	}

	static defaultProps = {
		statusBar:{
			backgroundColor:'green',
			barStyle:'light-content',
		 	hidden:false,
		}
	}

	constructor(props){
		super(props);
		this.state = {
			title:'',
			hide:false
		}
	}

	render(){
			let statusBar = <View style={[styles.statusBar,this.props.statusBar]}><StatusBar {...this.props.statusBar}/></View>
			let title = this.props.titleView ? this.props.titleView : <Text style={styles.title}>{this.props.name}</Text>
			let content = <View style={styles.navigationBar}>
				{this.props.leftButton}
				<View style={styles.titleViewContainer}>
					{title}
				</View>
				{this.props.rightButton}
			</View>
		return (
			<View style={[styles.container,this.props.style]}>
				{statusBar}
				{content}
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },

  navigationBar:{
  	justifyContent:'space-between',
  	alignItems:'center',
  	height:Platform.OS === 'ios' ? NAVIBAR_HEIGHT_IOS : NAVIBAR_HEIGHT_IOS,
  	flexDirection:'row',
  },

  titleViewContainer:{
  	justifyContent:'center',
  	alignItems:'center',
  	position:'absolute',
  	left:40,
  	right:40,
  	top:0,
  	bottom:0,
  },

  title:{
  	fontSize:20,
  	color:'white',
  },
  statusBar:{
  	height:20,
  	backgroundColor:'green',
  }
})



