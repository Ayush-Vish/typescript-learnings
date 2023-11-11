"use strict";
const myObj = {
    name: "Ayush",
    email: "Anfsaknal@hmao ",
    address: "lsdnfsdnfas",
};
const getName = () => {
    return myObj["name"];
};
const getData = (key) => {
    return myObj[key];
};
console.log(getData("address"));
// -----------HTML ELEMENTS ------------------------//
const form = document.getElementById("myform");
const input = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    console.log(typeof Number(input.value));
    console.log(input.value);
    const h2 = document.createElement("h2");
};
