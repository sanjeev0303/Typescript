"use strict";
// type FuncType1 = (n: number, m: number, l?: number) => number | void;
// // function having Optional parameter which is "l"
// const func1: FuncType1 = (n, m, l) => {
//   if (typeof l === "undefined") return console.log(n * m);
//   return n * m * l;
// };
// func1(14, 10)
//************************************************************************** 
// type FuncType1 = (n: number, m: number, l?: number) => number;
// // function having Default parameter
// const func1: FuncType1 = (n, m, l = 20) => {
//   return n * m * l;
// };
// func1(14, 10)
// *********************************************************************************
// Rest Operator
// type FuncType1 = (...m: number[]) => number[] | void;
// const func1: FuncType1 = (...m) => {
//   return console.log(m);
// };
// func1(14, 10, 2,324, 234, 23, 234)
//***********************************************************************************
// function lol (n: number):number {
//     return n
// }
//************************************************************************************
// type FuncType3 = (n: number) => number;
// const lol2: FuncType3 = function (n){{
//     return n;
// }}
