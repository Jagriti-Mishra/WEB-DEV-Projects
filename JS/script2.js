            /*DOM EVENTS*/
// let btns = document.querySelectorAll('button');
// console.dir(btns);
// for(btn of btns){
    // btn.onclick = sayHello;//no parenthesis only assingn the fnc
    // btn.onclick = sayname;
    // btn.onmouseenter = function(){
    //     console.log('you enter the button');

    // btn.addEventListener('click',sayHello);
    // btn.addEventListener('click',sayname);
    // btn.addEventListener('dblclick',function(){
    //     console.log('you double click me');
    // });
// }

//btn.onclick = function (){
// alert('button is clicked');
// };

// function sayHello(){
//      alert('hello');
// }
// function sayname(){
//      alert('Jagriti Mishra');
// }

//Activity 
//  let btn = document.querySelector('button');

//  btn.addEventListener('click',function(){
//     let h3 = document.querySelector('h3');
//     let randomcolor = getrandomcolor();
//     h3.innerText = randomcolor;

//     let div = document.querySelector('div');
//     div.style.backgroundColor = randomcolor;
//     console.log('color updated');
//  });

// function getrandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }

// let p = document.querySelector('p');

// p.addEventListener('click',function(){
//     console.log('para was clicked');
// });

// let box = document.querySelector('.box');
// box.addEventListener('mouseenter',function(){
//     console.log('mouse inside box');
// });

// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let p = document.querySelector('p');
// let h3 = document.querySelector('h3');

// function changeColor(){
//     console.dir(this.innertext);
//     this.style.backgroundColor = 'green';
// }
// btn.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);
// h1.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);



// btn.addEventListener('click',function(event){
//     console.log(event);
//     console.log('button clicked');
// });

// btn.addEventListener('dblclick',function(event){
//     console.log(event);
//     console.log('button clicked');
// });

// let inp = document.querySelector('input');
// inp.addEventListener('keyup',function(event){
//     console.log("code = ",event.code);
//     if(event.code == 'ArrowUp'){
//         console.log('up');
//     }
//     else if(event.code == 'ArrowDown'){
//         console.log('Down');
//     }
//     else if(event.code == 'ArrowLeft'){
//         console.log('Left');
//     }
//     else if(event.code == 'ArrowRight'){
//         console.log('RIght');
//     }
// });

// let form = document.querySelector('form');
// form.addEventListener('submit',function(event){
//     event.preventDefault();
// });
    // console.dir(form);

//     let user = this.elements[0];//form.elements
//     let pass = this.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     //  
// });

// let user = document.querySelector('#user');
// user.addEventListener('change',function(){
//     console.log('input changes');
//     console.log('final value=',this.value);
// });
// let user = document.querySelector('#user');
// user.addEventListener('input',function(){
//     console.log('input event');
//     console.log('final value=',this.value);
// });

// let inp = document.querySelector('#text');
// let p = document.querySelector('p');
// inp.addEventListener('input',function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });