console.log("i am a tutorial on loops")

// let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a+i);
// }       

let obj = {
    name: "Mahak singh",
    age :20,
    company : "Meta silicon valley"


}

for (const key in obj) {
     {
        const element = obj[key];
        console.log(key,element)
        
    } 
}


for (const c of "Mahak") {
    console.log(c)
}