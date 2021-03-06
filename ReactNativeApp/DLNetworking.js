

export default class DLNetworking {
	static get(url){
		return new Promise((resolve,reject) => {
			fetch(url)
				.then(response => response.json())
				.then(result =>{
					resolve(result);
				})
				.catch(error => {
					reject(error);
				})
		})
	}

	static post(url,params){
		return new Promise((resolve,reject) => {
			fetch(url,{
				method: 'POST',
				header: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params)
			})
				.then(response => response.json())
				.then(result =>{
					resolve(result);
				})
				.catch(error => {
					reject(error);
			})
		})
	}
} 