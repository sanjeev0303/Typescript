"use strict";
// Type Utility
//   type User = Required<User>;
const user1 = {
    name: "Sanju",
    email: "sanju@gmail.com",
};
const users = {
    name: "Sanju",
    email: "sanju@gmail.com",
};
const users3 = {
    John: { age: 23 },
    andrew: { age: 23 },
    alen: { age: 23 },
    jack: { age: 23 },
};
//*******************************************************************************************************
// Parameters <Type>
const myFunc = (a, b) => {
    console.log(a + b);
};
//*******************************************************************************************************
// ConstructorParameters <Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
//*******************************************************************************************************
// ReturnType <Type>
const myFunc4 = (a, b) => {
    return a + b;
};
//*******************************************************************************************************
// InstanceType <Type>
class SampleClasses {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
const user = {
    s: "sdfkj",
    t: "sldfk",
};
