//Basic syntax with examples
/*new Promise(function (resolve,reject){
    setTimeout(() =>{
        console.log("Hello World");
        
    },1000)
    resolve()
}).then(console.log("Approved"))*/

// Watching .then() to be used as a return statement

/*const promise2 = new Promise(function (resolve,reject){
    resolve({username : "Bitan" , 
        college : "ABC"
    })
})
promise2.then(function(user){
    console.log(user);
})*/

//Reject() usecase for rejecting and throwing errors

/*const Promise3 = new Promise((resolve,reject) =>
{
    let error = true;
    if (!error){
        resolve("Promise resolved")
    }
    else{
        reject("Error: Something went wrong")
    }
})

Promise3.then(console.log("Approving....")).catch((error) => {
    console.log(error);
})*/

//.then() chaining is a very important concept for JS Promises as it provides you to access the return statement of your previous statement

/*const promise4= new Promise(function (resolve,reject){
    let error = false;
    if(!error){
        resolve({username : "Bitan" , 
            college : "ABC"
        })
    }
    else{
        reject("Oops!Error occoured")
    }
})
promise4.then(function(user){
    //console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) =>{
    console.log(error);
}).finally(() =>{
    console.log("Promise is either resolved or rejected!!!")})*/

//Async Await (It can be used as a substitute of Promise and .then() function and all but the error handeling is a big issue in it)

/*const promise2 = new Promise(function (resolve,reject){
    resolve({username : "Bitan" , 
        college : "ABC"
    })
});
 
async function stop(){
    const respond = await promise2;
    console.log(respond)

}
stop();*/

//For error handeling in Async await we can use the try(),catch() method......

const promise2 = new Promise(function (resolve,reject){
    resolve({username : "Bitan" , 
        college : "ABC"
    })
});
 
async function stop(){
    try{
        const respond = await promise2;
        console.log(respond);
    }
    catch(error){
        console.log(error);
    }

}
stop();