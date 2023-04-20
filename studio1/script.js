(function(){
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-paw');
    const home = document.querySelector('.fa-house');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const poem = {
        start: [0, 5, 8],
        stop: [4, 7, 10],
        line: [line1, line2, line3]
    }

    const loading = document.querySelector('.fa-dove');

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    }

    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
    
})();