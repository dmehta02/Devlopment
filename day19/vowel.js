// You need to create a function that counts the number of vowels in a given string. 
// Consider both uppercase and lowercase vowels.
function vowel()
{
    let str= document.getElementById("input").value
    str=str.toLowerCase()
    let count=0
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element=='u'||element=='o'||element=='i'||element=='e'||element=='a')
        {
            count++
        }
    }
    document.getElementById("result").textContent=count
}