(function() {
    
    // alert for usability
    alert("Hi there! Thanks for taking the time to check out my Davis Puzzle Game. This project is still very much under construction, and most parts are not working yet. I will open up any pages for you when it makes sense. Besides that, I'd like you to navigate the site, and imagine yourself as a 4th grader learning more about Davis and completing the Puzzle.");
    

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


})();