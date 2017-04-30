export default class ArrayTool{
	static updateArray(dataArray,item){
		for (var i = 0,len = dataArray.length; i < len; i++) {
			var temp = dataArray[i];
			if (temp === item) {
				dataArray.splice(i,1);
				return;
			}
		}

		dataArray.push(item)
	}

	static cloneArray(array){
		if (!array) return [];
		let newArray = [];
		for (var i = 0,len = array.length; i < len; i++) {
			newArray.push(array[i])
		}
		return newArray;
	}
}
