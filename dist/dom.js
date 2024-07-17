"use strict";
// Type Assertion
// const btn = document.getElementById("btn")! ;
// const btn = <HTMLElement>document.getElementById("btn") ;
const btn = document.getElementById("btn");
// const img = document.getElementById("myImg") as HTMLImageElement;
const img = document.querySelector("img");
img.src;
btn.onclick = function () {
    console.log("Button clicked!");
};
const form = document.getElementById("myForm");
const myInput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const value = Number(myInput.value);
    console.log(value);
    console.log(typeof value);
    const h2 = document.createElement("h2");
    h2.textContent = String(value + 20);
    const body = document.querySelector("body");
    body.append(h2);
};
const obj = {
    name: "sanju",
    email: "sanju@gmail.com",
};
// let key = "name";
// obj[key as keyof typeof obj]
const getName = () => {
    return obj["name"];
};
const getEmail = () => {
    return obj["email"];
};
const getData = (key) => {
    return obj[key];
};
getData("name");
