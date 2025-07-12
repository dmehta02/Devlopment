let currentSong=new Audio;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getsongs() {
    let a = await fetch("http://127.0.0.1:3000/songs/")
    let response= await a.text();
    let div=document.createElement("div")
    div.innerHTML=response;
    let as=div.getElementsByTagName("a")  
    let songs=[] 
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}
const playMusic= (track,pause=false)=>{
    // let audio = new Audio("/songs/"+ track)
    currentSong.src="/songs/"+track
    currentSong.play()
    play.src="pause.svg"
    document.querySelector(".songinfo").innerHTML=track
    
}
async function main(){
    let songs =await getsongs()
    console.log(songs);
    let songul=document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML=songul.innerHTML + ` <li>
                <img class="invert" src="music.svg" alt="">
                <div class="info">
                  <div class="songname">${song.replaceAll("%20"," ")}</div>
                  <div class="songartist">Artist</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                     <img class="invert" src="play.svg" alt="">
                </div>
              </li>`
    }
   Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
   e.addEventListener("click",element=>{
       console.log(e.querySelector(".info").firstElementChild.innerHTML)
       playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
    });
})
//next prev
play.addEventListener("click",()=>{
    if(currentSong.paused)
    {currentSong.play()
          play.src="pause.svg"
    }
    else{ currentSong.pause()
        play.src="play.svg"
    }
})
//timeupdate
currentSong.addEventListener("timeupdate",()=>{
    console.log(currentSong.currentTime,currentSong.duration)
    document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)}/${secondsToMinutesSeconds(currentSong.duration)}`
    document.querySelector(".circle").style.left = (currentSong.currentTime/currentSong.duration)*100+"%"
})

document.querySelector(".seekbar").addEventListener("click",e=>{document.querySelector(".circle").style.left=(e.offsetX/e.target.getBoundingClientRect().width)*100+"%"})
}
main()