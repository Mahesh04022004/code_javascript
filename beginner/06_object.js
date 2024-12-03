const mySym = Symbol("key1")
const jsUser = {
    name:"mahesh",
    age:12,
    education:"12 Pass",
    mySym:"mykey", // it is string here
    [mySym]:"symbol" // now it is symbol
}



console.log(jsUser)
console.log(jsUser["education"])
console.log(typeof jsUser[mySym])


// Destructuring the Object

const course = {
    courseName : " in hindi",
    price:"999",
    courseInstructor:"mahesh"
}

const {courseInstructor:instructor} =course
console.log(instructor)


