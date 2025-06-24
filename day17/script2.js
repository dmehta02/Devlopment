function dataupdate(name,channel,views,time){
const headingstore=document.querySelector(".heading")
headingstore.textContent=name;

const channelstore=document.querySelector(".channel")
channelstore.textContent=channel;

const viewsstore=document.querySelector(".views")
viewsstore.textContent=views;

const timestore=document.querySelector(".time")
timestore.textContent=time;
}