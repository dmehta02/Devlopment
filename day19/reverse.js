// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
function reversed(str){
    let str2=""
    for (let i = str.length-1; i >= 0; i--) 
        {
            str2+=str[i]
        }
        document.querySelector(".box").innerHTML=str+str2
    }
    let str="Hey Ya! Nice to meet you."
reversed(str)