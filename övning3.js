/*Minsta och största talet
Skapa en funktion som tar in array och skriver ut det minsta och största talet*/
let array = [1,5,2,3,6,8,7];
function number(){
    let sortedArray = array.sort()
    let length = array.length
    console.log(sortedArray)
    console.log(array[0])
    console.log(array[lenght-1])
}
number(array)