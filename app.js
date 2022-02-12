'use strict' // reduce no message error, improve efficency & give more warnings

const switcher=document.querySelector('.btn'); // select class

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme'); // toggle = show & hide

    var className = document.body.className; // get the body's class name
    if(className=="light-theme"){
        this.textContent = "Dark"; // this = switcher
    }else{
        this.textContent = "Light";
    }

    console.log("current class name : " + className);
});