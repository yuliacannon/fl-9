let a=parseFloat(prompt('Enter 1 side: '));
let b=parseFloat(prompt('Enter 2 side: '));
let angle=parseFloat(prompt('Enter angle: '));
const ANGLE_=180;
let alpha= Math.PI / ANGLE_ * angle;
let txt;

let c=Math.sqrt(a*a + b*b - 2*a*b*Math.cos(alpha));
let perimeter=a + b + c;
let p=perimeter/2;
let square= Math.sqrt(p*(p-a)*(p-b)*(p-c));

if (a<0 || b<0) {

  txt='Invalid data';

} else {

txt='c length: ' + +c.toFixed(2) +
     '\nTriangle square: ' + +square.toFixed(2) +
     '\nTriangle perimeter: ' +perimeter.toFixed(2);
}

console.log(txt);
