var buttonColors =["red","blue","green","yellow"];
var gamePattern =[];
var level = 1;
var check=true;
var userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColour=this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});
function playSound(name){
    var audio=new Audio('sounds/'+name+'.mp3');
    audio.play();
}
function animatePress(currentColour){
    $('.'+currentColour).addClass("pressed");
    setTimeout(function(){$('.'+currentColour).removeClass("pressed");},100);
}
$(document).keydown(function(){
    if($("h1").text()==="Press A Key to Start"){
        alert("instructions:try to keep track of the button sequence");
        nextSquence();
    }
    if($("h1").text()=== "GameOver! , Press any Key to restart"){
        level=1;
        gamePattern=[];
        nextSquence();
    }
});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length){
        for(var i=0;i<currentLevel;i++){
            if(gamePattern[i]!==userClickedPattern[i]){
                check=false;
                break;
            }}
            if(check===true){
                setTimeout(function(){nextSquence();},1000);
            }else if(check===false){alert("GameOVer");}

        }
        }else{
            playSound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){$("body").removeClass("game-over");},200);
            $("h1").text("GameOver! , Press any Key to restart");
        }
    }
    function nextSquence(){
        if(level===0){
        $("h1").text("Level 0");
        }else{
            $("h1").text("Level "+level);
        }
        userClickedPattern=[];
        level++;
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColour=buttonColors[randomNumber];
        gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    }
    