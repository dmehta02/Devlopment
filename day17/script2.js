function dataupdate(name, channel, views, time) {
  // const headingstore=document.querySelector(".heading")
  // headingstore.textContent=name;

  // const channelstore=document.querySelector(".channel")
  // channelstore.textContent=channel;

  // const viewsstore=document.querySelector(".views")
  // viewsstore.textContent=views;

  // const timestore=document.querySelector(".time")
  // timestore.textContent=time;

  let html = (
    `<div class="grid1">
      <img
        style="border-radius: 10px; width: 140px; height: auto"
        src="harry.avif"   alt=""
      />
      <div class="grid2">
        <div class="heading">
         ${name}
        </div>
        <div class="grid3">
          <div class="channel">${channel}</div>
          <div class="views">${views}</div>
          <div class="time">${time}</div>
        </div>
      </div>
    </div>`
  );
  document.querySelector(".cont").innerHTML=document.querySelector(".cont").innerHTML + html
}