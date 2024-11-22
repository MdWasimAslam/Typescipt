type Employee = {

    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

const teacher: Employee =
{
    id: 1,
    name: "Karen",
    retire: function (date: Date) {
        return date;
    }
};


console.log(teacher);

