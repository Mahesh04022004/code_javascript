// Variable -> Store the data , it is like container which stores something

const accoundId = 101  // This Value can't be change 
// accoundId = 2
console.log(accoundId) // -> We will get TypeError

let accountEmail = "maheshvic123@gmail.com"
accountEmail = "newemail@gmail.com"
var accountPassword = "Jaipur"
accountPassword ="newPassword"

// Then why we need let 
/*
    Prefer not to use var because of functional scope and block scope
*/

let accountState  // -> this will automatically will get default value undefined
console.table([accoundId,accountEmail,accountPassword,accountState])




