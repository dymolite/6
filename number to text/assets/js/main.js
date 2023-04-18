num(prompt())

function numToText(a) {
    sum=0;
    count = 0;
    do {
        sum = a%10;
        a = (a-sum)/10;
        count++;
        switch (a) {
            case 0:
                console.log("sifir")
                break;
            case 1:
                console.log("bir")
                break;
            case 2:
                console.log("iki")
                break;
            case 3:
                console.log("uc")
                break;
            case 4:
                console.log("dord")
                break;
            case 5:
                console.log("bes")
                break;
            case 6:
                console.log("alti")
                break;
            default:
                break;
        }
    } while (a>0)
}