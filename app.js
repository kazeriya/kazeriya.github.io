'use strict' // reduce no message error, improve efficency & give more warnings

const portfolioItems=document.querySelectorAll('.port-single-item-wrapper'); // select class

portfolioItems.forEach(portfolioItem=>{
    portfolioItem.addEventListener('mouseover', ()=>{
        //console.log(portfolioItem);
        console.log(portfolioItem.childNodes[3].classList); // get .portfolio-img-bg
        portfolioItem.childNodes[3].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', ()=>{
        portfolioItem.childNodes[3].classList.remove('img-darken');
    })
})