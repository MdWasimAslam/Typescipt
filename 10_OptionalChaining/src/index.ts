type Customer ={
    BirthDate: Date;
}


function getCustomer(id:number):Customer | null{
    return id==0? null : {BirthDate: new Date()};
}


const cust = getCustomer(1);

console.log(cust?.BirthDate); //