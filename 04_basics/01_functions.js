var c = 100
let a = 300
const b = 400
if (true){
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a);
    console.log("Inner: b", b);
    console.log("Inner c", c);

}
console.log(a);
console.log(b);
console.log(c);