// VARIABLES GLOBALES

// FUNCTIONS EXTERNES

// DOM READY
document.addEventListener("DOMContentLoaded", ()=> {
    console.log("ready");

    const $popup = document.getElementById('popup');
    console.log($popup);
    document.addEventListener('mousemove', (event)=>{
        console.log('mousemove');
        //
        //console.log("pageX: ", event.pageX);
        //console.log("pageY: ", event.pageY);
        let popupX = event.clientX + 20;
        let popupY = event.clientY + 20;
        $popup.style.top = popupY+"px";
        $popup.style.left = popupX+"px";
    });

    const $refsgloss = document.querySelectorAll('.refgloss');
    console.log($refsgloss);
    $refsgloss.forEach( ($refgloss)=>{
        $refgloss.addEventListener('mouseenter', ()=>{
            console.log('au dessus ref');
            //
            let targettxt = $refgloss.getAttribute('href');
            console.log("target: ",targettxt);
            let $target = document.querySelector(targettxt);
            console.log($target);
            let content = $target.innerText;
            console.log(content);
            $popup.innerText = content;
            $popup.classList.remove('hidden');
        });
        $refgloss.addEventListener('mouseleave', ()=>{
            $popup.innerText = "";
            $popup.classList.add('hidden');
        });
    });
});