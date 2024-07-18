"use strict";
// Type Assertion

// const btn = document.getElementById("btn")! ;

// const btn = <HTMLElement>document.getElementById("btn") ;

const btn = document.getElementById("btn") as HTMLElement;

// const img = document.getElementById("myImg") as HTMLImageElement;

const img = document.querySelector("img")!;

img.src;

btn.onclick = function () {
  console.log("Button clicked!");
};

const form = document.getElementById("myForm") as HTMLFormElement;
const myInput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = Number(myInput.value);
  console.log(value);
  console.log(typeof value);

  const h2 = document.createElement("h2");
  h2.textContent = String(value + 20);

  const body = document.querySelector("body")!;
  body.append(h2);
};

//********************************************************************************************

interface Person1 {
  // [key: string] : string; // dynamic key
  name: string;
  email: string;
}

const obj: Person1 = {
  name: "sanju",
  email: "sanju@gmail.com",
};

// let key = "name";
// obj[key as keyof typeof obj]

const getName = (): string => {
  return obj["name"];
};

const getEmail = (): string => {
  return obj["email"];
};

const getData = (key: keyof Person1): string => {
  return obj[key];
};

getData("name");
