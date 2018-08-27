function findType(arg){
  return typeof arg;
}


function forEach(array, func){
  for(let i = 0; i<array.length; i++){
    func(array[i]);
  }
}


function map(array, func){
  let newArr=[];
  forEach(array,el => newArr.push(func(el)));
  return newArr;
}


function filter(array, func){
  let newArr=[];
  forEach(array,el => {
    if(func(el)){
      newArr.push(el);
    }
  });
  return newArr;
}


function getAdultAppleLovers(data){
  let arr = [];
  var filter = (data) => {
		if (data.age > 18 && data.favoriteFruit === 'apple'){
			arr.push(data.name);
		}
	}
  map(data,filter);
	return arr;
}


function keys(obj){
  let arr=[];
  for(let key in obj){
  if(obj.hasOwnProperty(key)){
    arr.push(key);
  }
  }
  return arr;
}


function values(obj){
  let arr=[];
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
    arr.push(obj[key]);
  }
  }
  return arr;
}


function showFormattedDate(date){
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return 'It is ' + date.getDate() + ' of ' + month[date.getMonth()] +', ' + date.getUTCFullYear();
}
