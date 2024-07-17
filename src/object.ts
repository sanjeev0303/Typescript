// // prefer using interface rather than using type during creating object because it give the property of inheritance
// interface Obj  {
//     height: number;
//     weight: number;
//     gender?: boolean; // here using ? for making this property optional
// }

// type FuncType = (n: number, m: number)=> void

// interface newObj extends Obj {
// scholer: boolean;
// // func?:(n: number, m: number)=> void
// func: FuncType;
// }

// const newobj: newObj = {
//     height: 123,
//     weight: 23,
//     scholer: true,
//     func : (n, m) => {
//         console.log(n * m);
//     }
// }

// const newobj1: newObj ={
//     height: 12,
//     weight: 123,
//     scholer: true,
//     func : (n, m) => {
//         console.log(n * m);
//     }
// }

// newobj.func(10, 20)

// const obj: Obj = {
// height: 123,
// weight: 12,
// gender: true
// }

// const obj2:Obj ={
//     height: 423,
//     weight: 14,
//     // in this object the gender is not using
// }