// Generic

// const func = <CustomType> (n: CustomType): CustomType =>{
// return n;
// }

// const result = func(20)
// const result1 = func("sanju")
// const result2 = func(true)

//****************************************************************************************

// type Animal = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
//   // console.log(n);
// };

// const cat: Animal = {
//   name: "meow",
//   age: 23,
// };

// const result = func<Animal>(cat);

//*****************************************************************************************

// const func = <T, U> (t: T, u: U): {t: T, u: U} => {
// return {t , u}
// }

// const ans = func<string, number>("sanju", 20)

//*****************************************************************************************

// type Person = {
//   name: string;
//   age: number;
// };

// type Person2 = {
//   name: string;
//   age: number;
//   email: string;
// };

// const User: Person = {
//   name: "sanju",
//   age: 20,
// };

// const User2: Person2 = {
//   name: "sanju1",
//   age: 12,
//   email: "sanju1@gmail.com",
// };

// const func = <T, U extends T>(t: T, u: U): { t: T; u: U } | void => {
//   // return  {t, u }
//   console.log({ t, u });
// };

// const ans = func<Person, Person2>(User, User2);

//******************************************************************************************


type Person = {
    name: string;
    age: number;
}

const users5: Person[] = [
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
]

const filterByPeople = <T, U extends keyof T> (arr: T[], property: U, value: T[U]): T[] =>{
return arr.filter(item => item[property]=== value)
}

const filterPeopleByName =  filterByPeople(users5, "name", "noir");
const filterPeopleByAge =  filterByPeople(users5, "age", 108);
console.log(filterPeopleByName);
console.log(filterPeopleByName);

