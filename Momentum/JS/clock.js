const clock = document.querySelector("#clock");

function nowTime(){
  const hour = String(new Date().getHours()).padStart(2,"0");
  const min = String(new Date().getMinutes()).padStart(2,"0");
  const sec = String(new Date().getSeconds()).padStart(2,"0");
  clock.innerText = `${hour}:${min}:${sec}`
}
nowTime();
setInterval(nowTime,1000);

