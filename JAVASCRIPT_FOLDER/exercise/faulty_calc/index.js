let random = Math.random()
console.log(random)
let a = prompt("enter first number : ")
let c = prompt("enter operations : ")
let b = prompt("enter second number : ")


let obj = {
    "+" : "-" ,
    "*" : "-" ,
    "/"  :"+" ,
    "-"  :"**"
}


if (random > 2) {

    console.log(`the result is ${a} ${c} ${b }`)
    alert(  `the result is ${eval(`${a} ${c} ${b} `)}`)

}


else {
    c = obj[c]
    alert(  `the result is ${eval(`${a} ${c} ${b} `)}`)

}  