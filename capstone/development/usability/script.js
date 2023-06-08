(function() {
    console.log('reading js');

    // alert for usability
    alert("Hi there! Thanks for taking the time to check out my Davis Puzzle Game. This project is still very much under construction, and most parts are not working yet. I will open up any pages for you when it makes sense. Besides that, I'd like you to navigate the site, and imagine yourself as a 4th grader learning more about Davis and completing the Puzzle.");

    
    // PUZZLE PAGE
    $(document).ready(function(){
        const puzzleContainer = $("#puzzleContainer");

        const rows = 2;
        const columns = 2;
        let pieces = "";
        let place = 1;
        let pieceOrder = 0;
        for (let i=0; i<rows; i++)
        {
            for (let j=0; j<columns; j++)
            {
                pieces+= `<div class='piece'><img src="images/tree${place}.svg" alt="piece" width="186" height="186" data-order="${pieceOrder}"></div>`;
                place++;
                pieceOrder++;
            }
        }
        console.log(pieces);
        puzzleContainer.html(pieces);
        $("#btnStart").click(function(){
            console.log("button clicked")
            let pieces = $("#puzzleContainer div");
            pieces.each(function(){
                const leftPosition = Math.floor(Math.random()*290)+25 + "px";
                const topPosition = Math.floor(Math.random()*290)+25 + "px";
                $(this).addClass("draggablePiece").css({
                    position: "absolute", 
                    left: leftPosition,
                    top: topPosition
                })
                $("pieceContainer").append($(this));
            });
            let emptyString = "";
            let spaceOrder = 0;
            for (let i=0; i<rows; i++)
            {
                for (let j=0; j<columns; j++)
                {
                    emptyString+= `<div class='piece droppableSpace' data-order=${spaceOrder}></div>`;
                    spaceOrder++;
                }
            }
            // console.log(emptyString);
            puzzleContainer.append(emptyString);
            $(this).hide();
            const btnReset = $("#btnReset")
            btnReset.show();
            $("#btnComplete").show();
            implementLogic();
        });
        function implementLogic(){
            $(".draggablePiece").draggable({
                revert:"invalid",
                start:function(){
                    if($(this).hasClass("droppedPiece")){
                        $(this).removeClass("droppedPiece")
                        $(this).parent().removeClass("piecePresent");
                    } 
                }
            });
            $(".droppableSpace").droppable({
                hoverClass:"ui-state-highlight", //change theme in link to change color
                accept:function(){
                    return!$(this).hasClass("piecePresent")
                },
                drop:function(event,ui){
                    const draggableElement = ui.draggable;
                    const droppedOn = $(this);
                    droppedOn.addClass("piecePresent");
                    $(draggableElement).addClass("droppedPiece").css({
                        top:0,
                        left: 0,
                        position: "relative"
                    }).appendTo(droppedOn);
                }
            });
            $("#btnComplete").click(function(){
                $("#completedPuzzle").show().addClass("animate__backInDown");
            })
            $("#btnReset").click(function(){
                window.location.reload();
            });
        }
    });

        

    // WELCOME PAGE
    // how to play 
    document.querySelector('#howto').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#overlay').className = 'hidden';
        }
    });
    // "play" opens next page
    // document.querySelector('#play').addEventListener('click', function() {
    //     window.location.href = "question.html";
    // });
    document.getElementById('play').addEventListener('click', function() {

        const fadeOutElement = document.getElementById("fadeOut");
        fadeOutElement.style.transition = "opacity 1s forwards";
        setTimeout(() => {
          fadeOutElement.style.display = "none";
        }, 2000);

        window.location.href = "question.html";
    });


    

    
})();
