let arr = [1,2,3,4,5]
// newArr= []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }


let newArr = arr.map((e)=>{
    return e**2
})

console.log(arr)
console.log(newArr)

const greaterthanthree = (e) =>{
    if(e>3){
        return true
    }
    return false
}

console.log(arr.filter(greaterthanthree))


arr2 = [1,2,3,4,5]

const red = (a,b) => {
    return a*b
}

console.log(arr2.reduce(red))