// let arr = [1,2,5,7,6]

// console.log(arr);

// console.log(arr.length);

// console.log(arr[0]);

// arr[0]= 14587;
// console.log(arr, typeof arr);

// console.log(arr.toString());

// console.log(arr.join(" and "));
// console.log(arr.pop());
// console.log(arr);

// console.log(arr.push(52));

// console.log(arr.shift());
// console.log(arr.unshift("hey guys i hope ya'll are good"))
// console.log(delete arr[4] );

// console.log(arr);

// let a1 = [2,5,4,6]
// let a2 = [7,5,3,9]
// let a3 = [1,2,3,6]

// console.log(a1.concat(a2,a3));

// let b = [4,8,6,3,4]
// console.log(b.sort());
// console.log(b.splice(2,3));


let c= [2,4,8,16,32,64]

for (let index = 0; index < c.length; index++) {
    const element = c[index];
    console.log(element)    
}

c.forEach((value, index, arr) => {
    console.log(value, index ,arr)
});

obj = {
    a:1,
    b:2,
    c:3
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}




