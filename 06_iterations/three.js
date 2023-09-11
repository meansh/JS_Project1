const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "Swift"
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["java", "js", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    }