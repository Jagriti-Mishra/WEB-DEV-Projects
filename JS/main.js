function hello(){
    console.log("hello");
}
function demo(){
    hello();
}

console.log("calling demo function");
demo();
console.log("done,Bye!!");
function one(){
    return 1;
}
function two(){
    return one()+one();
}
function three(){
    let ans = two()+one();
    console.log(ans);
}
three();

setTimeout(() =>{
    console.log("shubhi mishra");
},2000);

console.log("hello..");

const h1 = document.querySelector("h1");

function changeColor(color,delay,nextcolorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextcolorChange) nextcolorChange();
    },delay);
}

//call back nesting => callback hell

changeColor("red",1000, () => {
    changeColor("orange",1000, () => {
        changeColor("green",1000, () => {
            changeColor("blue",1000, () => {
                changeColor("purple",1000, () => {
                    changeColor("pink",1000);
                });
            });
        });
    });
});

function savetoDB(data,success,failure) {
    let internetspeed = Math.floor(Math.random()*10)+1;
    if(internetspeed > 4){
        success();
    }else{
        failure();
    }
}
savetoDB(
    "Jagriti Mishra",
    () => {
        console.log("Data 1 saved successfully");

        savetoDB(
            "Jagriti Mishra",
            () => {
                console.log("Data 2 saved successfully");

                savetoDB(
                    "Jagriti Mishra",
                    () => {
                        console.log("Data 3 saved successfully");
                    },
                    () => {
                        console.log("Failed to save Data 3");
                    }
                );
            },
            () => {
                console.log("Failed to save Data 2");
            }
        );
    },
    () => {
        console.log("Failed to save Data 1");
    }
);

Promises
 function savetoDB(data) {
    return new Promise((resolve,reject) =>{
let internetspeed = Math.floor(Math.random()*10)+1;
    if(internetspeed > 4){
        resolve("done");
    }else{
        reject("failed");
    }
    });
}
let request = savetoDB("Jagriti Mishra");//req => promise obj
request.then((result) => {
        console.log("data 1 saved.");
        console.log(result);
         return savetoDB("Shubhi Mishra") // promises chaining
        })

    .then((result) => {
        console.log("data 2 saved done");
        console.log(result);
        return savetoDB("Shubhi this side")
    })
    .then((result) => { // promises chaining
            console.log("data 3 saved ");
            console.log(result);
    })
    .catch((error) => {//single func for handling the reject case
        console.log("func after the task is rejected");
        console.log(error);
    }) 
h1 = document.querySelector('h1');
function changeColor(color,delay){
     return new Promise((resolve,reject) =>
        setTimeout(() => {
            h1.style.color = color;
            if(delay){
            resolve('color changed');//result as an arg
            }
            else{
            reject('color not changed');
            }
        },delay)
    )
};

call back nesting => callback hell

changeColor("red",1000)
        .then((result) => {
        console.log("red changed");
        console.log(result);
        return changeColor("orange",1000 );
        })
        .then((result) => {
            console.log("orange color changed");
            console.log(result);
            return changeColor("green",1000);
        })
        .then((result) => {
            console.log("green color changed");
            console.log(result);
            return changeColor("blue",1000);
        })
        .then((result) => {
            console.log("blue color changed succussfully");
            console.log(result);
            return changeColor('pink',1000);
        })
        .then((result) => {
            console.log('pink color changed');
            console.log(result);
        })
        .catch((error) => {
            console.log("color changes failed ");
            console.log(error);
        });

async function greet() {
    throw "404 Page Not found";//rejection state
    return 'hello!!'
}
greet().then(() => {
    console.log(greet());
    console.log("Resolve state");
})
.catch(() => {
    console.log(greet());
    console.log('Rejected state');
})

Await func
function getNum() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        resolve();
        },2000);
    });
}

async function demo() { //await keyword only used inside the async func
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    await getNum();
}
h1 = document.querySelector('h1');
    function changeColor(color,delay){
         return new Promise((resolve,reject) =>
            setTimeout(() => {
                let num = Math.floor(Math.random()*5)+1;
                if(num > 3){
                reject('Promise rejected');//result as an arg
                }
                h1.style.color = color;
                console.log(`color chnaged to ${color}!`);
                resolve("color changed");
            },delay)
        )
    };

async function color(){
    try{
    await changeColor("green",1000);
    await changeColor("purple",2000);
    await changeColor("blue",1000);
    await changeColor('pink',1000);
    }
    catch(err){
        console.log('error occured');
        console.log(err);
    }
}

