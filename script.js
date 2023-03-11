const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1982, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Techhnology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 2011, end: 2016 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//for loop
// for(let i=0;i<companies.length;i++){
//   console.log(companies[i]);
// }

//foreach
// companies.forEach((el) => {
//   console.log(el.name, el.category);
// });

//filter
// const can = ages.filter((age) => {
//   return age >= 20;
// });
// console.log(can);

// const caneat = ages.filter((age) => age >= 20);
// console.log(caneat);

// const compRetail=companies.filter((el)=>{
//   return el.category==="Retail";
// })
// console.log(compRetail);

// const compfin=companies.filter(company=> company.category==="Finance" );
// console.log(compfin);

// const companieseight=companies.filter((company)=>{
//   return company.start>=1980 && company.start<=1990;
// })
// console.log(companieseight);

// const compend10=companies.filter((company)=>{
//   return company.end-company.start >=10
// })
// console.log(compend10);
/*-----------------------------------------------------*/
//map
// const namecompany = companies.map((company) => {
//   return company.name;
// });
// console.log(namecompany);

// const namescreencompany = companies.map((company) => {
//   return `<p> Company Name is ${company.name} the duration is ${
//     company.end - company.start
//   } </p>`;
// });
// document.write(namescreencompany);

// const sqrtage=ages.map(age=> Math.sqrt(age));
// const squareage=ages.map(age=>age*2);
// console.log(sqrtage);
// console.log(squareage);

//بيجيب الجذر ويضرب في 2
// const towinone=ages.map(age=>Math.sqrt(age)).map(age=>age*2);
// console.log(towinone);

//sort

// const sortedcompany = companies.sort((a, b) =>
//  ( a.start > b.start ? 1 : -1
// ));
// console.log(sortedcompany);

// const agesort = ages.sort((a, b) => (b-a));
// console.log(agesort);

//reduce
// const sumage =ages.reduce((total,age)=>{
//   return total+age;
// },0);
// console.log(sumage);
// const oneline=ages.reduce((total,age)=>total+age,0);
// console.log(oneline);

// const totalcompanyYear=companies.reduce((total,company)=>{
//   return total+(company.end-company.start);
// },0);
// console.log(totalcompanyYear);

// const totalYear=companies.reduce((total,company)=> total+(company.end-company.start)
// ,0);
// console.log(totalYear);

//combined
// const comined=ages
// .map(age=>age*2)
// .filter(age=>age>40)
// .sort( (a,b)=>a-b)
// .reduce((total,age)=>total+age,0);
// console.log(comined);

//zero
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newarr = [];

// mix.map((letr) => {
//   if (isNaN(letr)) {
//     newarr.push(letr);
//   }
// });
// let result = newarr.reduce((acc, curr) => {
//   return acc + curr;
// }, "");

// console.log(result) ; // Elzero
/*---------------------------------*/
// let myString = "EElllzzzzzzzeroo";
// let result=[]
// result=myString.split("");
// let newa=[];
// result.filter((let)=>{
//  if(newa.includes(let)){

//  }
//  else{
//   newa.push(let)
//  }
// })
// console.log(newa.join(""));

// Elzero
/*------------------------------------------*/
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let arr=myArray.flat();
// console.log(arr.join(""));
// Elzero
/*-----------------spreed-------------------*/
console.log("mohamed");
console.log(..."mohamed");
console.log([..."mohamed"]);
let arr1=[1,2,3];
let arr2=[4,5,6];
let allarr=[...arr1,...arr2];
console.log(allarr);
let copiedarr=[...allarr];
console.log(copiedarr);

let friend=["ahmed","mohamed","ali"];
let newfriend=["sameh","ibrahim"];
friend.push(...newfriend);
console.log(friend);
console.log(Math.max(...allarr));

let obj1 ={
  a:1,
  b:2,
}
let obj2={
  c:3,
  d:4,
}
console.log({...obj1,...obj2,e:4});








