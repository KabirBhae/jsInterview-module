const students = [
    {id: 1, name: 'arafat'},
    {id: 2, name: 'kabir'},
    {id: 3, name: 'khan'}
];
let array = [];
for (let i = 0; i<students.length; i++){
    array.push(students[i].id);
}
console.log(array);