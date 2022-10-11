/*Skapa en funktion som tar in två arrayer och skriver true om de är identiska*/
let x = compare([1,2,3,4], [1,2,3,4]);
function compare(a,b){
    if (a == b){
        console.log("TRUE")
    }if (a != b){
        console.log("FALSE")
    }
};

compare(x)