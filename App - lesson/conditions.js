
let num = 50;
if (num < 49) {
console.log("Неверно");
} else if (num > 100) {
console.log("Многовато");
} else {
console.log("Верно!");
}

(num == 50) ? console.log("Верно!") : console.log("Неверно");


switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Многовато");
        break;
    case num > 80:
        console.log("Многовато");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то не так");
        break;
}


//while (num < 55) {
//    console.log(num);
//    num++;
//}

do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

let x = 5; alert( x++ );
console.log(x);

let z = [ ] + false - null + true;
console.log(z);