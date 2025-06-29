// Async Array Mapping: Write an asynchronous function that takes an array of numbers
//and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.
async function asyarr() {
    let arr=document.getElementById("input").value.trim().split(",")
    let strarr=arr.map(num=>parseInt(num,10))
    const result = await Promise.all(strarr.map(n=>
        new Promise(res => setTimeout(()=>res(n*2),3000))))
        document.getElementById("result").textContent = result
}
