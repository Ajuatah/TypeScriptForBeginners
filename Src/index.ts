//no need for this 

const small = 1;
const Medium = 2;
const Large = 3;

//use enums instead 

enum  Size {small =0, Medium, Large}

let mySize: Size = Size.Medium;
console.log(mySize);
