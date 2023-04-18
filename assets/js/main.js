/* TASK1
 var r=Number(prompt())

function areOfCircle(r) {
    return 3*r*r;
}
console.log(areOfCircle(r)); */

/* TASK2
 function areaOfRectangle(a,b){
    return a*b;
}

alert(areaOfRectangle(prompt("eni daxil et"),prompt("uzunlugu daxil et"))) */


/*  TASK3
function areaOfParallelepiped(a,b,c) {
    return 2*(a*b+a*c+b*c);
}

alert(areaOfParallelepiped(prompt(), prompt(), prompt())) */

/* TASK4
function areaOfTriangle(r,a,b,c) {
    p=(Number(a)+Number(b)+Number(c))/2;
    return p*r;
}
alert(areaOfTriangle(prompt("radiusu daxil et"),prompt(),prompt(),prompt())) */

/* TASK5
num(prompt())

function num(a) {
    sum=0;
    count = 0;
    do {
        sum = a%10;
        a = (a-sum)/10;
        count++;
    } while (a>0)
}
alert(count) */

/*TASK6
 num(prompt())

function num(a) {
    count=0;
    while (a%2===0) {
        a/=2;
        count++;
    }
    if(count>0){
        alert('ikinin quvvetidir')
    }
    else {
        alert('ikinin quvveti deyil')
    }  
} */

num(prompt())

var count=0;
function num(a) {
    if (a<1){
        return false;
    }
    else if(a<50){
        for (let i = a; i > 0; i--) {
            if (i%3===0){
                count++;
            }
        }
    }
    else if(a<100){
        for (let i = a; i > 50; i--) {
            if (i%5===0){
                count++;
            }
        }
    }
    else if(a>100){
        for (let i = a; i > 100; i--) {
            if (i%8===0){
                count++;
            }
        }
    }
    else {
        return false;
    }
}
alert(count)