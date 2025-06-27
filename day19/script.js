function hat(array)
{
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if  (element.length <6)
            {
                console.log(element+": Gryffindor")
        }
        else if(element.length>=6&&element.length<8)
            {console.log(element+": HufflePuff")}
        else if(element.length>=8&&element.length<12)
            {console.log(element+": Ravenclaw")}
        
        else if(element.length>=12)
            {console.log(element+": Slytherin")}
        else{
            console.log("Invalid name")
        }
        }
}