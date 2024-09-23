const age = 30;
if(age>20) {
    console.log('Young man');
    
}
const mark = 45
if(mark<=100&&mark>=80) {
    console.log('A+');
    
}
else if(mark>=70) {
    console.log('A');
    
}
else if(mark>=60) {
    console.log('A-');
    
}
else if(mark>=50) {
    console.log('B');
    
}
else if(mark>=40) {
    console.log('B-');
    
}
else if(mark>=33) {
    console.log('C');
    
}
else if(mark>100) {
    console.log('Invalid mark');
    
}
else {
    console.log('F');
    
}

let x = 0;
let text = ''
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);

if (1 > 0 && 2 > 1) {
    console.log("Both conditions are true");
  } 

  