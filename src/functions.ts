// optional parameters
type FuncType = (n: number, m: number, l?: number) => number;

// const funct :FuncType= (n,m,l) => {
// type Gaurd
//     if(typeof l === "undefined") return n*m ;
//     return l*m*n;

// }

// console.log(funct(3,23,32))

// Default parameter
// const funct :FuncType= (n,m,l=121) => {
//         if(typeof l === "undefined") return n*m ;
//         return l*m*n;

//     }

//     console.log(funct(3,23))

// Rest operator

// const f = (...m : number[]) => {
//     return m ;

// }

// console.log(f(2323,23,23,23,23,23,2,32,3,23))

// function fuck (n:number ) :number  {
//     return 45 ;

// }

// const fuck:FuncType = function fuck ( n , m  ) {
//     return 3;

// }

//  function with  object

// interface Product{
//     name: String;
//     stock :number;
//     readonly id :number
// }

// type GetDataType =(product:Product) => void
// const getData :GetDataType = (product) : void => {
//     console.log(product);

// }

// const p1 :Product=  {
//     name: "Ayush",
//     stock :323,
//     id:212
// }

// getData(p1) ;

// -------------------- Never Type -----------------------//
// // When we throw error then "never" is returned.
// const errorHandler = ( ) =>  {
//     throw new Error( ) ;
// } // never is returned

// //  Classes in TS 0----------------------------------------------------------- //

// class Player {
//     private   height  =34 ;
//     wieght=32;
//     constructor ( private height:number  ,public  weight:number , protected op : number) {}

// }

// const ayush  = new Player (1122,12  ,90) ;

//------------------type assertion ---------------------------------//
// 1 Way

// const btn = document.getElementById('btn') as HTMLElement ;

// 2 Way
// const btn2   =   <HTMLElement>document.getElementById("btn") ;
// const btn2   =   document.getElementById("btn")! ;

// ------------------ making dynamic key value pair -- ---------------//

interface Person {
  [key: string]: string;
}

const myObj: Person = {
  name: "Ayush",
  email: "Anfsaknal@hmao ",
  address: "lsdnfsdnfas",
};
const getName = (): string => {
  return myObj["name"];
};

const getData = (key: string): string => {
  return myObj[key];
};

console.log(getData("address"));

// -----------HTML ELEMENTS ------------------------//

const form = <HTMLFormElement>document.getElementById("myform");
const input = document.querySelector("form > input") as HTMLInputElement;
form.onsubmit = (e) => {
  e.preventDefault();
  console.log(typeof Number(input.value));
  console.log(input.value);
  const h2 = document.createElement("h2") as HTMLHeadingElement;
};
