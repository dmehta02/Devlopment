
// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


let array1=["hello","hi","hello","hello","hello","wassup","how","why","how"]
let array2=[]
function double(array)
{
    for (let i = 0; i < array.length; i++) {
        if(array[i+1]==array[i])
            continue;
        else{
            array2.push(array[i])
            array2.push(array[i])
        }
    }
}
double(array1)
document.querySelector(".box").innerHTML=array2