const coding = ["js", "ruby", "java", "cpp"]

coding.forEach( function(val) {
   //console.log(val);
})

function printMe(item) {
    //console.log(item);
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "j"
    },
]

myCoding.forEach( (item) => {
   // console.log(item.languageName);
})

var string = "Welcome to this JS guide!"

var reverse = reverseEachWordBySeparator(string, "")

function reverseEachWordBySeparator(string, separator) {
    return string.split(separator).reverse().join(separator)
}

console.log(reverse);