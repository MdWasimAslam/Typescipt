// Class is a blueprint for creating objects

class Account {
  nickname?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private balance: number
  ) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance = this.balance + amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance = this.balance - amount;
  }

  getBalance() {
    return this.balance;
  }

  // getter function
  get funds():number{
    return this.balance;
  }

  //setter function
  set funds(value:number){
    if(value<0){
        throw new Error("Invalid balance");
    }
    this.balance = value
  }
}

// Creating an object of class Account

let account = new Account(101, "Wasim", 100);
account.deposit(100);
account.withdraw(20);
console.log(account);
// console.log(account instanceof Account)

// Access control keywords

// console.log(account.getBalance())


//----- Getter and Setters
console.log(account.funds)

// Using setter func to directly manipulating the private value in the object class
account.funds = 500;
console.log(account.funds)





// ----------- index signature --------

class SeatAssignment{
    [seatNumber:string] : string;
}

let seats = new SeatAssignment();

seats.A1 = 'Wasi';
seats.A2 = 'Akhil';

console.log(seats)


//----------- Static Members ---------
class Ride {
    private static activeRide:number = 0;

    start(){Ride.activeRide++};
    stop(){Ride.activeRide--};

    static get ActiveRides(){
        return Ride.activeRide
    }
}


let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride2.start();


console.log(Ride.ActiveRides)



// ----------- Inheritance -----------
console.log('------------------------');

class Person{
    constructor(public firstName: string, public lastName :string) {

    }

    get fullName(){
        return this.firstName +" "+ this.lastName;
    }

    walk(){
        console.log('Walking...')
    }
}



class Student extends Person{
    constructor(public studentId: number, firstName:string, lastName:string) {
        super(firstName,lastName)
    }

    takeTest(){
        console.log('Taking a test..')
    }
}


// let student = new Student(101,'John','Moris');

// console.log(student)


class Teacher extends Person{
   override get fullName(){
        return "Prof " + super.fullName
    }
}

class Principal extends Person{
    override get fullName(){
         return "Principal " + super.fullName
     }
 }

let teacher = new Teacher('John','Smith');
console.log(teacher.fullName);




// ----------- Polymorphism ---------
printNames([
    new Student(1,'John','Smith'),
    new Teacher('Karen','James'),
    new Principal('Johnny','Peter'),
]);


function printNames(people:Person[]){
    for(let person of people)
        console.log(person.fullName)
}


// Private methods are not inherited but protected can be inherited

// Note start with abstract class