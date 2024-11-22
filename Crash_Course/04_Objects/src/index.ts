const employee:{
    id:number,
    name:string
} = { id:1, name:"" };

employee.name = "John";


console.log(employee);



const teacher: 
{ 
    readonly id: number,
     name: string,
     retire:(date:Date)=> void
    } = 
    { 
    id: 1,
    name: "Karen",
    retire: function(date:Date){
        return date;
    }
};


console.log(teacher);

