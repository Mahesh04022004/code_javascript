//  Promise object represent eventual response
// example like file excess -> here we need access of kernel

/* Promise has three state 
        fullfill
        resolve
        reject
*/

const promise1 = new Promise(function(resolve,reject){
    // Do an asyn task
    setTimeout(()=>{
        console.log("Async task is completed");
        resolve()
        
    },1000)
})

promise1.then(function(){
    console.log("Promise Consumed");
    
})

const promise2 = new Promise(function(resolve,reject){
    // Do an asyn task
    setTimeout(()=>{
        console.log("Async task 2 is completed");
        resolve()
        
    },1000)
}) 