let rand = Math.random()
let first, second, third;

//first
if (rand < 0.33) {
    first = "crazy"
}

else if (rand < 0.66 && rand >= 0.33) {
    first = "amazing"
}

else {
    first = "fire"
}

//second
rand = Math.random()

if (rand < 0.33) {
    second = "engine"
}

else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods"
}

else {
    second = "Garments"
}



//third

rand = Math.random()

if (rand < 0.33) {
    third = "Bros"
}

else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"
}

else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)