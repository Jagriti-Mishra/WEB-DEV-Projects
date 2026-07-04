let todo = [];
let req=prompt('please enter your request');

//multiple task slelection for the to-do 
while(true){
    if(req == 'quit'){
        console.log('quitting the app');
        break;
    }
    if(req == 'list'){
        console.log('--------------');
        for(let i= 0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log('----------');
    }else if(req == 'add'){
        let task= prompt('Enter the task to perform');
           todo.push(task);
           console.log(task);
    }else if(req == 'delete'){
        let idx =prompt('enter the idx of the task to delete');
        todo.splice(idx,1);
        console.log('task deleted');
    }else{
        console.log('Invalid req');
    }
    req=prompt('please enter your request');
}
