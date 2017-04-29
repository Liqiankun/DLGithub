export default class DataTool {
	fetchNetworking (url) {
		return new Promise((reslove,reject) =>{
			fetch (url)
				.then(response => response.json())
				.then(result => {
					reslove(result);
				})
				.catch(error =>{
					reject(error);
				})
		})
	}
}