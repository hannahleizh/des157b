(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const myMoods = await fetch('data/mood2.json');
        const data = await myMoods.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showMoodInfo(point, data){
        const fontAwesomeFaces = [
            '<i class="fa-solid fa-cake-candles"></i>',
            '<i class="fa-solid fa-champagne-glasses"></i>',
            '<i class="fa-solid fa-bowl-rice"></i>',
            '<i class="fa-solid fa-cheese"></i>',
            '<i class="fa-solid fa-egg"></i>',
            '<i class="fa-solid fa-mug-hot"></i>',
            '<i class="fa-solid fa-utensils"></i>',
        ];
        document.querySelector('#food').innerHTML = data[point].food;
        document.querySelector('#moods').innerHTML = fontAwesomeFaces[ data[point].mood ];
        document.querySelector('#time').innerHTML = data[point].time;
    }

    // Event listener for when the mouse moves
    document.addEventListener('mousemove', reportPos);

    let prevLoc = 0;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showMoodInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); 