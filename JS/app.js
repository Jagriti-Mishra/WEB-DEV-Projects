// console.log("Jagrit this side");
// console.log("Steve Jobs");
// let a = 5;
// let b = 6;
// console.log("sum of" , a ,"and" , b ,"is" ,(a+b));
// //this is a comment
// let price = 100;
// let stocks = 10;
// let output = `sum of price and stocks is:${price + stocks}`;//backticks are used
// console.log(output);
// //Arithmetic operators
// let a = 5;
// let b = 7;
// console.log((a+b),(a/b),(a%b) ,(a-b),(a**b) );
// console.log((a>b));
// console.log(a==b);
// console.log(a>=b);
// console.log(!(a>b));
// console.log(a===b);
// console.log('*'<'&');
// let c =20;
// if(c <18){
//     console.log("you can't vote");
// }
// if(c>18){
//     console.log("you can vote");
// }
// console.log("Invalid");
// 
// let a = "Green";
// let b = "Yellow";
// let c = "Red";
// let output = a;//a/b/c
// if(output === a){
//     console.log("move");
// }
// if(output === b){
//     console.log("wait");
// }
// if(output === c){
//     console.log("stop");
// }
// console.log("Inavlid");
// let age = 25;
// if(age<10){
//     console.log("Kiddo");
// }
// else if(age>20){
//     console.log("Adult");
// }
// console.log("check all the cases");

// let marks=75;

// if(marks>80){
//     console.log("fail");
// } else if(marks >= 90){
//     console.log("A+");
// } else if(marks >= 70){
//     console.log("B");
// }
// else if(marks >= 33){
//     console.log("B+");
// }

// let age = 5;
// if(age > 18){
//     console.log('Adult');
// }
// else if(age >=10){
//     console.log("not ready to vote");
// } else{//age<10
//     console.log("kiddo");
// }
// let color ="white";

// if(color ==='red'){
//     console.log('stop');
// }else if(color === 'yellow'){
//     console.log('wait');
// }else if(color==='green'){
//     console.log('go');
// }else{
//     console.log("invalid signal");
// }
// console.log('traffic signal');

//popcorn prices
// let size='XXS';

// if(size === 'XL'){
//     console.log("price is Rs. 250");
// } else if(size === 'L'){
//     console.log('price is Rs. 200');
// }else if(size === 'M'){
//     console.log('price is Rs. 100');
// }else if(size=== 'S'){
//     console.log('price is Rs. 50' );
// }else {
//     console.log("invalid size");
// }

// let marks = 25;
// if(marks >= 33){
//     if(marks >=40){
//         console.log("pass");
//     }
//     else{
//         console.log("not pass");
//     }
// }else if(marks <23) {
//     console.log("bad");
// }else{
//     console.log('poor');
// }

// let a = 25;
//  if(a > 10 && a <20 ){
//     console.log("between 10 and 20");
//  } else if( a=== 10 || a === 20){
//     console.log('either 10 or 20');
//  }else if( a > 20 && a> 30){
//     console.log("greater than both 20 and 30");
//  } else if(a != 10 ){
//     console.log("not equal to 10");
//  }else{
//     console.log('remaining all are allowed');
//  }

// if(true){
//     console.log('it has true value');
// }else {
//     console.log('it has false value');
// }
// 
// if(null){
//     console.log('it has true value');
//  }else {
//      console.log('it has false value');
//  }
// if(undefined){
//     console.log('it has true value');
//  }else {
//      console.log('it has false value');
//  }
// if(''){ empty string
//     console.log('it has true value');
//  }else {
//      console.log('it has false value');
//  }
// if(' '){ not a empty string
//     console.log('it has true value');
//  }else {
//      console.log('it has false value');
//  }

// let color = 'blue';

// switch(color) {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('wait');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     case 'blue':
//         console.log('shutupp');
//         break;
//     default:
//         console.log('invalid');
// }
//alert and prompt
// alert("Danger!");
// prompt('please Enter your username:');
// console.warn('shows the warning');
// console.error('shows the error');
// let firstname = prompt('Enter the first name');
// let lastname = prompt('Enter the last name');
// // console.log("Welcome", firstname ,' ' , lastname,'!');
// alert('welcome Jagriti Mishra!!');

//string.trim() 
//strings are immutable as the changes are made in the temprary string and not in original string
// let msg=' Hello ';
// msg.trimEnd();
// console.log(msg);
// let password=prompt('Enter your Username');
// console.log(password.trim());
// let str="Dubai";
// str.indexOf('Dubai');
//  let str="ilovecoding";
//  console.log(str.slice(4));
//  console.log(str.slice(2,6));
//  console.log(str.length);
//  console.log(str.slice(-6));//length-num
// let msg= 'triptomanali';
// console.log(msg.replace('trip','gottago'));
// console.log(msg.replace('manali','dubai'));
// console.log(msg.repeat(4));

// let str='Dil Maange More';
// console.log(str.repeat(2));


// let msg="    help     ";
// console.log(msg);
// console.log(msg.trim());
// console.log(msg.toUpperCase());

// let name = "ApnaCollege";
// console.log(name.slice(4,9)); //Colle
// console.log(name.indexOf("na"));//2
// console.log(name.replace("Apna","Our"));//OurCollege
// console.log(name.slice(5));//ollege
// console.log(name.length);//11
// console.log(name.slice(-5));//11-5=6 llege
// console.log(name.slice(4).replace('l','t').replace('l','t'));
//changes made in all the strings are done in the new temp string and no chnages are possible in the original string because the strings are immutable in JS

// let students=["Jagriti","Shraddha","PeterParker"];
// console.log(students);
// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students.length);
// console.log(students[0][0]);
// console.log(students[2][4]);
// //diff types of data can also be stored in a single arr
// let info = ["JJ","RJ","SJ",1.5,45,24,12.44444];
// console.log(info[6]);
// console.log(info.length);
// console.log(info[0]);
// //empty arr acn also be created
// let arr = [];
// console.log(arr.length);
// console.log(arr[0]);
// //Arrays are mutable
// let arr1 = ["Jagrit","Shubhi","JJ","SS"];
// console.log(arr1);
// console.log(arr1[0]=["JagritiMishra"]);
// arr1[0]="JagritiMishra"//muatable arr
// console.log(arr1);
// arr1[4]="Shubhu";
// console.log(arr1);
// arr1[6] = "Shubhi Mishra";
// console.log(arr1);//remaining index in between remains empty
// console.log(arr1[5]);
// arr1.push("lambo");
// arr1.push("Rolls Royce");
// console.log(arr1);
// console.log(arr1.length);
// arr1.pop();
// console.log(arr1);
// arr1.pop();
// console.log(arr1);

// console.log(arr1.unshift("BMW"));//add to strt
// console.log(arr1);
// console.log(arr1.shift());//dlt from strt and return
// console.log(arr1);

// let strt = ['january','july','march','august'];
// strt.splice(2,0,'june');
// console.log(strt);
// strt.shift();
// console.log(strt);

// console.log(strt);
// strt.shift();
// strt.shift();
// console.log(strt);
// strt.unshift("june");
// strt.unshift("july");
// console.log(strt);

// strt.pop();
// console.log(strt);
// strt.push('april');
// console.log(strt);
// console.log(strt.indexOf('april'));
// console.log(strt.includes('april'));
// console.log(strt.includes('Rolls Royce'));

// console.log(arr1.concat(strt));
// console.log(strt.reverse());
// console.log(strt.concat(arr1));
// console.log(strt.slice(2));

// let cars=["mustang","BMW",'rolls royce','mercedes'];
// console.log(cars.length);
// console.log(cars.slice(2,4));//2-3
// console.log(cars.slice(2));//2-last idx
// console.log(cars.slice(-4));

// let colors=['red','yellow','blue','ornage','pink','white'];
// console.log(colors);
// colors.splice(4);//remove the ele from 4 idx
// console.log(colors);
// colors.splice(0,1);//remove the red
// console.log(colors);
// colors.splice(0,1,'black','grey');
// console.log(colors);
// colors.splice(1,2,"neon",'violet');
// console.log(colors);
// colors.splice(0,0,'g wagon','Thar');
// console.log(colors);
// colors.sort();
// console.log(colors);

// let lang=['c','cpp','html','js','python','c#','sql'];
// console.log(lang.reverse().indexOf('js'));

//array references

// let arr=['a','b','c','d','e','f','g'];
// let arr2=arr;//now address of both are pointing to same arr
// arr2.push('z');
// console.log(arr);
// arr.pop();
// console.log(arr2);
// arr2.splice(0,0,'z');
// console.log(arr);
// const arr=[1,2,3,4,5,6];
// arr.push(7);
// arr.push(8);
// console.log(arr);
// const arr1=[1,2,3];
// console.log(arr1);
// //arr=arr1; assignment to constant var is prohibited
// let arr3 = [[1,2],[1,2,3],[3,4,5,6],[4,5,6,7]];
// console.log(arr3);
// console.log(arr3[3][3]);//7
// console.log(arr3[0][1]);//2
// console.log(arr3[2][3]);//6
// console.log(arr3[1][3]);//[]
// console.log(arr3[2][3]);//6

// let game = [['X','O',null],["O",'X',null],['O',null,'X']];
// console.log(game);//tic-tac-toe
// console.log(game[0][2]);
// game[0][2]='O';
// console.log(game);
// for(let i=0;i<=5;i++){
//     console.log(i);
// }
// let name = 'shubhi';
// let l = name.length;
// for(let name=0;name<=l;name++){
//     console.log(name);
// }
//print odd no.
// for(let i=0;i<=15;i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }
//print even no.
// for(let i = 0;i<=10;i++){
//     if(i % 2 != 0){//odd num
//     console.log(i);
// }
// }
// console.log('Multiplication table of 5')
// for(let i = 1 ; i<= 50;i++){
//     if(i%5 == 0){
//         console.log(i);
//     }
// }
// let n = prompt('enter the value of n');
// for(let i = n;i<=n*10;i++){
//     console.log(i);
// }
// for(let i=0;i<=10;i++){
//     for(let j = 1;j<=2;j++){
//         console.log(j);
//     }
// }
// for(let i = 0;i<=5;i++){
//     for(let j=1;j<=5;j++){
//         console.log('inner');
//     }
//     console.log('outer');
// }
// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// let favmovie="La La Land";
// let guess = prompt('Enter the fav movie');
// while((guess != favmovie)&& (guess != 'quit')){
//     console.log('wrong');
//     guess=prompt('wong guess.plz try again');
// }
// if(guess == favmovie){
//     console.log('congrats!');
// }
// else{
//     console.log('you quit');
// }
// to break at any specific num
// let i = 1;
// while(i <= 5){
//     if(i== 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
//to skip a num
// let game='PS5';
// let guess = prompt("Enter the game");
// while(guess != game){
//     if(guess == 'quit'){
//         console.log('you quit');
//         break;
//     }
//     guess=prompt('wong ans.try again');
// }
// if(guess == game){
//   console.log('congrats');
// }
// let arr = [154,2.14,324,445,50,67];
// arr.push(7);
// arr.unshift(9);
// // for(let i = 0;i<arr.length;i++){
// //     console.log(i,arr[i]);
// // }
// for(let i= arr.length-1;i>=0;i--){
//     console.log(i,arr[i]);
// }
// let heroes= [['ironman','spiderman','thor'],['superman','ww','flash']];
// for(let i = 0;i<heroes.length;i++){
//     console.log(i,heroes[i]);
//     for(let j = 0;j<=heroes.length;j++){
//         console.log(heroes[i][j]);
//     }
// }
// let employee=[['sakshi',80],['jj',100],['rj',99]];
// for(let i = 0;i<employee.length;i++){
//     console.log(`info of the Mrks #${i}` );
//     for(let j = 0;j<2;j++){
//         console.log(employee[i][j]);
//     }
// }
// let arr1 = [1,2,3,4];
// for(arr of arr1){
//     console.log(arr);
// }
// let myName = 'shubhi mishra';
// for(char of myName){//here char is a var
//     console.log(char);
// }
//for-of in nested loops 
// let heroes= [['ironman','spiderman','thor'],['superman','ww','flash']];
// for(list of heroes){
//     for(name of list){
//         console.log(name);
//     }
//     console.log(list);
// }
// const employee ={
//     name:'jagriti',
//     company:'MS',
//     CTC: '50lpa',
//     jobrole: 'SWE intern'
// };
// console.log(employee);
// let teacher = {
//     name:'Japneet',
//     Occupation:'Physics Teacher',
//     Salary:'24lpa'
// };
// console.log(teacher);
// let thread={
//     username:'@ViratKohli',
//     content:'IPL match 2k26',
//     likes:"24M",
//     reposts:"5M",
//     tags:['Dhoni','Sachin','hardhik']
// };
// console.log(thread);
// console.log(thread.tags); //to get value of obj literals
// console.log(thread['likes']);//alternative way
// const obj={
//     1:'a',
//     2:'b',
//     3:'jj',
//     null:'shutupp',
//     true:'c',
//     undefined:'e'
// };
// console.log(obj);
// console.log(obj[1]);//1 is a not a idx its a string
// obj[2];//here 2 is not any idx instead it a string which is converted by the obj literals as it converts the num into string 
// console.log(obj[2]);
// console.log(obj[null]);
// console.log(obj.null);
// obj.null='Mercedes';//to update the value
// console.log(obj);
// obj.gender='F';//to add new value
// console.log(obj);
// delete obj.gender;//to delete the value using delete keyword
// console.log(obj);

// obj of obj

// const employee={
//     John :{
//         company:'Google',
//         jobrole:'SWE intern',
//         CTC:'24lpa',
//         Cabin :'L-14'
//     },
//     Jagriti :{
//         company:'Goldman Sachs',
//         CTC:'50lpa',
//         jobrole:'SWE intern',
//         Hobbies:'Singing'
//     },
//     Grey:{
//         company:'Capgemini',
//         CTC:'50lpa',
//         jobrole:'SWE intern',
//         Hobbies:'Playing cricket'
//     }

// };
// console.log(employee);
// let student=employee;
// console.log(student);

// //arr of obj

// let arr=[
//     {
//         name:'jagriti',
//         city:'Mumbai',
//         occupation:'Data Analyst'
//     },
//     {
//         name:'kiran',
//         city:'Delhi',
//         occupation:'Data Analyst'
//     },
//     {
//         name:'John',
//         city:'Noida',
//         occupation:'Data Analyst'
//     },
//     {
//         name:'Michael',
//         city:'bangalore',
//         occupation:'Data Scientist'
//     }
// ];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// arr[1].role='SWE';//same as obj
// console.log(arr);

//math obj -> to perform the math operation
//random num between 1-100
// let random = Math.floor(Math.random()*100)+1;
// console.log(random);
// //from 1-5
// let random1 = Math.floor(Math.random()*5)+1;
// console.log(random1);
// //from 21-25
// let random2 = Math.floor(Math.random()*5)+20;
// console.log(random2);
// //from 1-6
// let random3 = Math.floor(Math.random()*6)+1;
// console.log(random3);

/*Functions*/
// function even(){
//     //even num from 0-15
//     for(let i=0;i<=15;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//         else{
//             console.log('odd num');
//         }
//     }
// }
// even();//calling func using func name

// function diceRoll(){
//     let random=Math.floor(Math.random()*6)+1;
//     if(random==6){
//     console.log(`woahh!! ${random}`);
//     }
//     else{
//         console.log(random);
//     }
// }
// diceRoll();//you can directly call the func no need of consolelog
// diceRoll();
// diceRoll();
// diceRoll();
// diceRoll();

//with args
// function odd(num){
//     //print the odd num
//     for(let i=0;i<=num;i++){
//         if(i%2 != 0){
//         console.log(i);
//         }
//     }
// }
//odd num from 0-20
// odd(20);
//odd num from 0-50
// odd(50);

// function sum(num1,num2){
//     let sum=num1+num2;
//     console.log(sum);
// }
// sum(10,20);
// sum(12.777,239.999);

// function avg(a,b,c){
//     let Avg = (a+b+c)/3;
//     console.log(Avg);
// }
// avg(2,3,4);
// avg(10,20,30);

//return keyword

// let average=avg(2,3,4);//GLobal Scope
// console.log(average);
// }
// function avg(a,b,c){
//     let Avg = (a+b+c)/3;//func scope
//     return Avg;
// }
// let average=avg(2,3,4);//GLobal Scope
// console.log(average);

// function outerFunc(){
//     let x=7;
//     let y=9;
//     function innerFunc(){
//         console.log(x);
//     }
//     innerFunc();
// }
// console.log(outerFunc());

//SCOPE

// let greet='helloo!!';//Global Scope

// function changeGreet(){
//     let greet='namaste'; //Function scope
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet); //lexigal Scope
//     }
// }
// console.log('greet');
// changeGreet();

// //Function Expression
// const v=function(b,c){
//     return b+c;
// }
// console.log(v(2,3));

// function multipleGreet(func,count){//higher order func
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// let greet = function(){
//     console.log('hello');
// }
// multipleGreet(greet,10);

// const calculator = {
//     num:55,
//     add:function(a,b){
//         return a+b;
//     },
//     multiply:function(a,b){
//         return a*b;
//     },
//     divide:function(a,b){
//         return a/b;
//     },
//     modulo:function(a,b){
//         return a%b;
//     },
//     sub:function(a,b){
//         return a-b;
//     }

// };
// console.log(calculator.num);
// console.log(calculator.add(2,3));
// console.log(calculator.multiply(2,3));
// console.log(calculator.divide(2,3));
// console.log(calculator.sub(2,3));
// console.log(calculator.modulo(2,3));

//this keyword
//  const student={
//     eng:30,
//     phys:40,
//     math:90,
//     DSA:90,
//     getAvg(){
//         let avg=(this.eng+this.phys+this.math+this.DSA)/4;
//         return avg;
//     }
//  }
//  getAvg(this);//default this->window Obj.

// console.log('hello');
// console.log('hello');
// console.log('hello');
// console.log('hello');
// let a = 'namaste';
// try{
//     console.log(a);
// }catch(err){
//     console.log('a is not defined');
// }
// console.log('hello1');
// console.log('hello2');

//Miscellanous topics
//1.Arrow Functions

// const sum=(a,b) =>{
//     console.log(a+b);
// }
// console.log(sum);

// const cube=(n) =>{
//     return n*n*n;
// }
// const pow=(a,b) =>{
//     return a**b;
// }
// console.log(cube(3));
// console.log(pow(2,3));

//IMPLICIT RETURN

// const mul = (a,b) => (a*b);
// console.log(mul(2,3));
// console.log(mul(9,12));
// console.log(mul(5,10));
// console.log(mul(29,37));

//setTimeout Function->Built -in func
// console.log('hi there');
// setTimeout( ()=>{
//     console.log('jj');
// },3000);
// console.log('Helllooo');

//setInterval func
// setInterval(()=>{
//     console.log('You r an amazing Cricketer');
// },2000);

// let id = setInterval( () =>{
//     console.log('Hey There its Jagriti Mishra');
// },2000);
// console.log(id);

// let id2= setInterval( () =>{
//     console.log('Ik i m amazingly gud');
// },2000);
// console.log(id2);

// //to stop the interval
// console.log(clearInterval(id));
// console.log(clearInterval(id2));

// const student = {
//     name:'Jagriti',
//     Course:'B.Tech',
//     marks:97,
//     prop:this,//global scope
//     getName:function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks:() =>{
//         console.log(this);
//         return this.marks;//parent scope->window
//     },
//     getInfo1: function () {
//         setTimeout( () =>{
//             console.log(this);//student obj
//         } , 2000);
//     },
//     getInfo2: function () {
//         setTimeout( function() {
//             console.log(this);//window obj
//         } , 2000);
//     },

// };
//array Methods
// let arr=[1,2,3,4,5,6,7,8,9];
// arr.forEach( (el) =>{
//     console.log(el);
// });
// arr.forEach( function(el) {
//     console.log(el);
// });

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print);

// let arr = [{
//     name: 'jagriti',
//     marks:98
//     },
//     {
//     name:'raj',
//     marks:58,
//     },
//     {
//         name:'shraddha',
//         marks:90,
//     }];

// console.log(arr);

// arr.forEach( (student) =>{
//     console.log(student);
// });
// arr.forEach( function(student) {
//     console.log(student);
// });
// arr.forEach( function(student) {
//     console.log(student.marks);
// });
// arr.forEach( (student) => {
//     console.log(student.marks);
// });

//map func
// let num=[1,2,3,4,5];
// let double = num.map(function(el){
//     return el*el;
// });
// console.log(double);

// let students = [{
//     name: 'jagriti',
//     marks:98
//     },
//     {
//     name:'raj',
//     marks:58,
//     },
//     {
//         name:'shraddha',
//         marks:90,
//     }
// ];

//     let gpa = students.map( (el) => {
//         return el.marks/10;
//     });
//     console.log(gpa);

//Filter func

// let arr = [2,3,4,5,8,9,5,4,22,,3,5,67,8,,9];

// let double = arr.filter( (el) => (el%2 == 0) );
// console.log(double);

//Every Method
// let arr=[1,3,5,7,9];

// let ans= arr.every( (el) => (el>0));
// let ans1= arr.every( (el) => (el%2 != 0));
// let ans2= arr.every( (el) => (el%2==0));
// console.log(ans);
// console.log(ans1);
// console.log(ans2);

// //some method
// let arr2=[2,4,6,8];

// let a= arr.some( (el) => (el>0));
// let b= arr.some( (el) => (el%2 != 0));
// let c= arr.some( (el) => (el%2==0));
// console.log(a);
// console.log(b);
// console.log(c);

//reduce method

// let arr = [12,44,5,6,6,7,5,43,2];
// let ans = arr.reduce((res,el) => {
//     console.log(res);
//     return res+el;
// });
// console.log(ans);

// let nums = [2,3,4,5,67,8,9];

// let result = nums.reduce( (max,el) => {
//     console.log(max);
//     if(el > max){
//         return el;
//     } else{
//         return max;
//     }
// });
// console.log(`the max num ${result}`);

// let arr = [10,20,30,40,50];
// let arr1 = [12,3,4,5,6,88,76,54,3];

// let ans=arr.every( (el) => (el%10 == 0));
// console.log(ans);

//spread func
// console.log(...'Jagriti Mishra');
// console.log(Math.max(...arr));

// let nums = [...arr,...arr1];
// console.log(nums);

// let ans= {...students};
// console.log(ans);

//spread in obj literals key li jgh pr idx aata hai 
// let arr3 = [2,35,5,68,765,4];
// let obj1 = {...arr};//obj -> key: value
// console.log(obj1);

// let val = {...'hello'};
// console.log(val);//in the form of obj letrals key:value

                  //Rest func

// function sum(...args){//arguments
//     for(let i=0;i<args.length;i++){
//         console.log('you gave us ',args[i]);
//     }
// }
// function sub() {//inbuilt collection
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(9);//arguments doent perform arr methods

// }
//destructuring 
// let name =["andrew",'shraddha','karishma','kareena','katrina'];
// let winner = name[0];
// let runnerup = name[1];
// let secrunnerup = name[2];

//let [winner,runnerup,secrunnerup,...others] = name;

