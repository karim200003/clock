function update(){
    const date = new Date();
    hour = date.getHours().toString().padStart(2,0);
    minute = date.getMinutes().toString().padStart(2,0);
    second = date.getSeconds().toString().padStart(2,0);
    const timestring = `${hour}:${minute}:${second}`;
    document.getElementById("clock").textContent = timestring;
}
update();
setInterval(update,1000)