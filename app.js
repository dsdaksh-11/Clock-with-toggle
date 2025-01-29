var hour = 0;
var minute = 0;
var second = 0;
var d = new Date();

const H = document.querySelector(".hours");
const M = document.querySelector(".minutes");
const S = document.querySelector(".seconds");

setInterval (
    function(){
        d = new Date();
        hour = d.getHours() * 30 + Math.round(minute/12);
        minute = d.getMinutes() * 6;
        second = d.getSeconds() * 6;
        H.innerText = d.getHours();
        M.innerText = d.getMinutes();
        S.innerText = d.getSeconds();
        document.getElementById("second_hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute_hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour_hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);

const toggle = document.getElementById("toggle");
const aTime = document.getElementById("analog_clock");
const Time_1 = document.querySelector(".hour.hour_1");
const Time_2 = document.querySelector(".hour.hour_2");
const Time_3 = document.querySelector(".hour.hour_3");
const Time_4 = document.querySelector(".hour.hour_4");
const Time_5 = document.querySelector(".hour.hour_5");
const Time_6 = document.querySelector(".hour.hour_6");
const Time_7 = document.querySelector(".hour.hour_7");
const Time_8 = document.querySelector(".hour.hour_8");
const Time_9 = document.querySelector(".hour.hour_9");
const Time_10 = document.querySelector(".hour.hour_10");
const Time_11 = document.querySelector(".hour.hour_11");
const Time_12 = document.querySelector(".hour.hour_12");
const mHand = document.getElementById("mHand");
const hHand = document.getElementById("hHand");
const mArrow = document.getElementById("mArrow");
const hArrow = document.getElementById("hArrow");

toggle.addEventListener("change",(evt)=>{
    if(evt.currentTarget.checked){
        document.body.style.background = "black"
        aTime.style.color = "white";
        Time_1.style.color = "white";
        Time_2.style.color = "white";
        Time_3.style.color = "white";
        Time_4.style.color = "white";
        Time_5.style.color = "white";
        Time_6.style.color = "white";
        Time_7.style.color = "white";
        Time_8.style.color = "white";
        Time_9.style.color = "white";
        Time_10.style.color = "white";
        Time_11.style.color = "white";
        Time_12.style.color = "white";
        mHand.style.background = "wheat";
        hHand.style.background = "wheat";
        mArrow.style.color = "wheat";
        hArrow.style.color = "wheat";
    }else{
        document.body.style.background = "white";
        aTime.style.color = "#283149";
        Time_1.style.color = "#283149";
        Time_2.style.color = "#283149";
        Time_3.style.color = "#283149";
        Time_4.style.color = "#283149";
        Time_5.style.color = "#283149";
        Time_6.style.color = "#283149";
        Time_7.style.color = "#283149";
        Time_8.style.color = "#283149";
        Time_9.style.color = "#283149";
        Time_10.style.color = "#283149";
        Time_11.style.color = "#283149";
        Time_12.style.color = "#283149";
        mHand.style.background = "#283149";
        hHand.style.background = "#283149";
        mArrow.style.color = "#283149";
        hArrow.style.color = "#283149";
    }
})