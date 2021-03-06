import React, {Component,PropTypes} from 'react';
import {
	AsyncStorage,
} from 'react-native';

import keys from '../../../res/data/keys.json';

export var FLAG_LANGUAGE = {flag_language:'flag_language_language',flag_key:'flag_language_key'};
export default class LanguageData {
	constructor(flag){
		this.flag = flag
	}

	onSave(data){
		AsyncStorage.setItem(this.flag,JSON.stringify(data),(error)=>{

		})
	}

	fetch(){
		return new Promise((resolve,reject)=>{
			AsyncStorage.getItem(this.flag,(error,result) => {
				if(error){
					reject(error)
				}else{
					if(result){
						try{
							resolve(JSON.parse(result))
						}catch(error){
							reject(error)	
						}
					}else{
						var data = this.flag === FLAG_LANGUAGE.flag_key ? keys : null;
						this.onSave(data)
					}
				}
			})
		})
	}
} 