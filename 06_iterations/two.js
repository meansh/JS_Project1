const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello World"

for (const greet of greetings) {
   // console.log(`Each character is, ${greet}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of America")
map.set('Fr', 'France')
map.set('IN', "India")

for( const [key, val] of map) {
   // console.log(key + ' :- ' + val);
}

for(const key in map) {
    console.log(key);
}