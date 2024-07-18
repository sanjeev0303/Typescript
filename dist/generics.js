"use strict";
// Generic
const users5 = [
    {
        name: "sanju",
        age: 199
    },
    {
        name: "sanjeev",
        age: 108
    },
    {
        name: "noir",
        age: 108
    },
    {
        name: "sam",
        age: 598
    },
];
const filterByPeople = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
const filterPeopleByName = filterByPeople(users5, "name", "noir");
const filterPeopleByAge = filterByPeople(users5, "age", 108);
console.log(filterPeopleByName);
console.log(filterPeopleByName);
