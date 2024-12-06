class KeyValuePair <T> {
  constructor(public key:T,public value:string){}
}

let keyObj1 = new KeyValuePair <string> ('2',"Banana")
let keyObj2 = new KeyValuePair <number> (1,"Banana")
let keyObj3 = new KeyValuePair ('any',"Banana")

console.log(keyObj1)
console.log(keyObj2)
console.log(keyObj3)


console.log("---------- Generic Functions ----------");

function wrapInArray <Generic> (value:Generic){
  return [value]
}



console.log(wrapInArray('apple'));


console.log("---------- Generic Interfaces ----------");

interface Result <Generic> {
  data : Generic | null;
  error : string | null;
}

function fetchData <Generic> (url:string): Result<Generic>{
  return {data:null,error:null} 
}



interface User{
  username:string;
}


interface Products {
  title:string
}


let result = fetchData<User> ('uri')
console.log(result)

console.log("---------- Generic Contraints ----------");

function echo <Generic extends {name:string}> (value:Generic):Generic{
  return value
}

console.log(echo({name:'harry'}));

//------ Start with extending generic classes
