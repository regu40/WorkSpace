var button = document.getElementById("btn");
//call back
button.onclick = function(){
    alert('clicked');
}

//promisses example

var promise1 = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('foo');
        //reject();
    },300);
});

var promise = document.getElementById('promise')
promise.onclick = function(){
    promise1.then(function(value){
        alert("From promise "+ value)
    })

    promise1.catch(function(err){
        alert("From promise Error "+ err)
    })
}

//async await
var async = document.getElementById("async")
async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("From Async Await"), 1000) //setTimeout(function() resolve("From Async Await"), 1000)
        
    });
    let result =await promise; //wait till promise resoolves

        alert ("result >> "+result) //done
}
        async.onclick= function(){
            f();
        }
