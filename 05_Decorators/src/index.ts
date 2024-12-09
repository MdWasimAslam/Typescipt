console.log("-------- Decorators --------");

function Component(value: number){
  return(constructor:Function)=>{
    console.log("Component Decorator Called!");
    constructor.prototype.wasim = "wasim";
    console.log(value);
  }
}

@Component(1)
class ProfileComponent{

}

//------ Decorator Method -------
console.log("------------- Decorator Method -------------");
function Log(target:any,methodName:string,descriptor:PropertyDescriptor){
  const original = descriptor.value as Function;
  descriptor.value = function(...args:any){
    console.log('Before');
    const result = original.call(this, '----->',...args); // Call original method

    if (result !== undefined) {
      console.log(result); // Log result only if it exists
    }
    console.log('After');

  }
}


class Person{
  @Log
  say(...args: string[]) {
    console.log("Hello ", ...args);
  }
}

const person = new Person();
person.say("World","Wasim");




//------ Accessor Decorator -------

console.log("------------- Accessor Decorator -------------");
function Captilize(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original  = descriptor.get;
  descriptor.get = function(){
    const value = original?.call(this);
    if(typeof value === 'string'){
      return value.toUpperCase();
      }
    return value;

  }
}



class Person2{
  constructor(public firstName:string,public lastName:string){}

  @Captilize
  get fullName(){
    return this.firstName +" "+ this.lastName;
  }
}


const person2 = new Person2("wasim","Aslam");
console.log(person2.fullName)


// ------ Property Decorator -------
console.log("------------- Property Decorator -------------");

function MinLength(length:number){
  return (target:any,propertyName:string)=>{
    let value:string;
    const descriptor:PropertyDescriptor = {
      get(){
        return value;
      },
      set(newValue:string){
        if(newValue.length < length){
          throw new Error(`Property ${propertyName} must be at least ${length} characters long`);
      }
        value = newValue;
    }
  }
  Object.defineProperty(target,propertyName,descriptor);
}
}

class User {
  @MinLength(4)
  password :string
  constructor(password:string ){
    this.password = password
  }
}

const user = new User("wasim");
console.log(user.password);


//------ Parameter Decorator -------
type WatchParameter = {
  methodName:string,
  parameterIndex:number
}

const watchParameters:WatchParameter[] = [];
function Watch(target:any,methodName:string,parameterIndex:number){

  watchParameters.push({
    methodName,
    parameterIndex
  })
  
}
class Vehicle{
  move(@Watch speed:number){}
}

console.log(watchParameters)
