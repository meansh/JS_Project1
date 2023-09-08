const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.height = "6feet"
//console.log(tinderUser);


let obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)


//console.log(Object.keys(tinderUser));

const course = {
    coursename: "Js in spanish",
    courseteacher: "Ansh",
    courseprice: "999"
}

const {courseteacher: instructor} = course

console.log(instructor);