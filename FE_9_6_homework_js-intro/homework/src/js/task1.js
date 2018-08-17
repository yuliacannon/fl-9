let price=parseFloat(prompt('Enter price:'));
let discount=parseFloat(prompt('Enter discount:'));
let txt;
let saved=price*(discount/100);
let redused=price-saved;

if (price<=0 || discount >100){
  txt='Invalid data';
}else{
  txt='Price without discount: ' + +price.toFixed(2) +
       '\nDiscount: ' + +discount.toFixed(2) + '%' +
       '\nPrice with discount: ' + +redused.toFixed(2) +
       '\nSaved: ' + +saved.toFixed(2);
}

console.log(txt);
