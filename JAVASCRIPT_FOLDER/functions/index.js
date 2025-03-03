function nice(name) {
    console.log("hey " + name + " you are nice")
    console.log("hey " + name + " you are superb")
    console.log("hey " + name + " you are finominal")
    console.log("hey " + name + " you are gorgeous")

}
nice("Mahak")

function sum(a,b,c=1) {
    console.log(a,b,c)
    return a+b+c
}

result1 = sum(100)
result2 = sum(42,25)
result3 = sum(85,25)

console.log("the sum of these numbers is :", result1)
console.log("the sum of these numbers is :", result2)
console.log("the sum of these numbers is :", result3)



const func1 = (x)=> {
    console.log("I am an arrow function", x)
}

func1(11);
func1(22);
func1(33);




