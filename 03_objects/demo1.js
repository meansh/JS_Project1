const mySymbol = Symbol()

const JsUser = {
    name: "Ansh",
    age: 18,
    location: "Kanpur",
    email: "ansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySymbol]: "key2"
}

JsUser.greeting = function(){
    //console.log("Hello Js User");
}

JsUser.greeting2 = () => {
    console.log(`Hello JSuser, ${this.age}`);
}

console.log(JsUser.greeting2());