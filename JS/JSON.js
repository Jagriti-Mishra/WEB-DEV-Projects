                    API-Application Programming Interface
let jsonRes = '{"fact":"Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.","length":114}';
 let validRes = JSON.parse(jsonRes);//JSON data to JS obj

 let name = "jagrit Mishra";
 let JsonRes = JSON.stringify(name);//JS obj => JSON data

 let student = {
    name  : "Jagriti",
    course : "B.Tech",
    Marks : 90,
 }
 let url = "https://icanhazdadjoke.com/";

 fetch(url , {
    headers: {
        Accept: "application/json"
    }
    })
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data.joke);
        return fetch(url, {headers: {Accept:"application/json"} });
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 =",data2.joke);
    })
    .catch((err) => {
        console.log("Error-",err);
     });

async function getFacts() {
    try{
        let res = await fetch(url ,{header : {Accept:"application/json"}});
        let data = res.json();
        console.log(data.joke);

        let res2 = await fetch(url ,{header : {Accept:"application/json"}});
        let data2 = res2.json();
        console.log(data2.joke);
    }catch(e){
        console.log('error occured',e);
    }
    console.log("Fetched");
}   
 
                    AXIOS func
async function getFacts() {
try{
    let res = await axios.get(url);
    console.log(res.data);

    let res2 = await axios.get(url);
    console.log(res2.data);
    }catch(e){
    console.log('error occured',e);
    }
    console.log("Fetched");
}   

let btn = document.querySelector('button');

btn.addEventListener("click",async() => {//async func to resolve the promises 
    let fact = await kitty();
    console.log(fact);
    let p = document.querySelector('#result');
    p.innerText = fact;
});

let link = "https://catfact.ninja/fact";
async function kitty() {
try{
    let res = await axios.get(link);
    return res.data.fact;
    }catch(e){
    console.log('error occured',e);
    return "No Fact found";
    }
}

let btn = document.querySelector('button');

btn.addEventListener("click",async() => {
    let image = await sheoru();
    
    // to get the image from the random link
    let img = document.querySelector('#result');
    img.src = image;
    img.setAttribute("src",image);
    console.log(image);
})
let dogapi = "https://random.dog/woof.json";
async function sheoru() {
    try{
        let res = await axios.get(dogapi);
        return res.data.url;
    }catch(e){
        console.log("Error occur");
        return "No image found";
    }
}

let url = "https://randomuser.me/api/";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {

    let info = await getinfo();

    let p = document.querySelector("#result");

    p.innerText =JSON.stringify(info, null, 2);
    console.log(info);
});

async function getinfo() {
    try {
        let res = await axios.get(url);
        return{
            name: res.data.results[0].name.first,
            email: res.data.results[0].email,
            country: res.data.results[0].location.country,
            image: res.data.results[0].picture.large
        };
    } catch (e) {
        console.log("Error:", e);
        return [];
    }
}
let url = "https://api.potterdb.com/";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {

    let info = await getinfo();

    let p = document.querySelector("#result");

    p.innerText =JSON.stringify(info, null, 2);
    console.log(info);
});

async function getinfo() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (e) {
        console.log("Error:", e);
        return [];
    }
}

