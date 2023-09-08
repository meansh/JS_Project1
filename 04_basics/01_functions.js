function loginUserMessage(username = "Ansh") {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

handleObject(user)