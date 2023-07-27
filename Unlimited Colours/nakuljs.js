const randomColor = function()
{
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i=0;i<6;i++)
    {
        color = color + hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interval;
const start = document.querySelector("#start").addEventListener('click',function(){
    if(!interval)
    {
        interval = setInterval(changeBgColor , 1000);
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
});

const stop = document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(interval);
    interval = null; // memory free karne ke liye use kiya hai isko
});