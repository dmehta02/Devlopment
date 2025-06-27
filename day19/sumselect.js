// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumselect(){
let str = document.querySelector("input").value
let strarr=str.trim().split(/\s+/)
let intarr=strarr.map(bnbd => parseInt(bnbd,10))
let sum=0 
for (const element of intarr) {
    if(element<0)
        return sum
    else
    sum+=element
}
return result.textContent=sum
}
