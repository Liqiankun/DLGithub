import React, {Component,PropTypes} from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ViewTool{
	static backBarButtonItem(callBack){
		return <TouchableOpacity
			onPress={callBack}
		>
			<Image style={{width:22,height:22,margin:5}} source={require('../../res/images/ic_arrow_back_white_36.png')}></Image>
		</TouchableOpacity>
	}
}