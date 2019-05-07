//global var
let playerChanger = 0;
let playerXWinsArray = [];
let playerOWinsArray = [];
let tableFills = 0;
let xWinsTimes = 0;
let oWinsTimes = 0;
let tieTimes = 0
let playerChoice = 1;
let computerPlaying = false;
$('#playAgain').hide()


//functions section
const playerX = function (event) {
    $(event.target).html('<img src="assest/x.png" alt="X">');
    $(event.target).off()
    $('.turns').text('O turn')
    playerXWinsArray[$(event.target).attr('id')]='X';
    if(playerXWinsArray[0]!==undefined && playerXWinsArray[1]!==undefined && playerXWinsArray[2]!==undefined
        ||playerXWinsArray[3]!==undefined && playerXWinsArray[4]!==undefined && playerXWinsArray[5]!==undefined
        ||playerXWinsArray[6]!==undefined && playerXWinsArray[7]!==undefined && playerXWinsArray[8]!==undefined
        ||playerXWinsArray[0]!==undefined && playerXWinsArray[3]!==undefined && playerXWinsArray[6]!==undefined
        ||playerXWinsArray[1]!==undefined && playerXWinsArray[4]!==undefined && playerXWinsArray[7]!==undefined
        ||playerXWinsArray[2]!==undefined && playerXWinsArray[5]!==undefined && playerXWinsArray[8]!==undefined
        ||playerXWinsArray[0]!==undefined && playerXWinsArray[4]!==undefined && playerXWinsArray[8]!==undefined
        ||playerXWinsArray[6]!==undefined && playerXWinsArray[4]!==undefined && playerXWinsArray[2]!==undefined)
        {
            $('.cell').off()
            $('.turns').text('X wins')
            xWinsTimes++
            $('#xWins').text('X wins: '+xWinsTimes)
            $('#playAgain').show()
        }
    else if(tableFills===8){
        $('.cell').off()
        tieTimes++
        $('#ties').text('Ties : '+tieTimes)
        $('#playAgain').show()
        $('.turns').text('Tie')
    }
    tableFills++;
    playerChanger = 2;
}


const playerO = function (event) {
    $(event.target).html('<img src="assest/o-png-89-images-in-collection-page-2-png-o-200_200.png" alt="O">');
    $(event.target).off()
    $('.turns').text('X turn')
    playerOWinsArray[$(event.target).attr('id')]='O';
    if(playerOWinsArray[0]!==undefined && playerOWinsArray[1]!==undefined && playerOWinsArray[2]!==undefined
        ||playerOWinsArray[3]!==undefined && playerOWinsArray[4]!==undefined && playerOWinsArray[5]!==undefined
        ||playerOWinsArray[6]!==undefined && playerOWinsArray[7]!==undefined && playerOWinsArray[8]!==undefined
        ||playerOWinsArray[0]!==undefined && playerOWinsArray[3]!==undefined && playerOWinsArray[6]!==undefined
        ||playerOWinsArray[1]!==undefined && playerOWinsArray[4]!==undefined && playerOWinsArray[7]!==undefined
        ||playerOWinsArray[2]!==undefined && playerOWinsArray[5]!==undefined && playerOWinsArray[8]!==undefined
        ||playerOWinsArray[0]!==undefined && playerOWinsArray[4]!==undefined && playerOWinsArray[8]!==undefined
        ||playerOWinsArray[6]!==undefined && playerOWinsArray[4]!==undefined && playerOWinsArray[2]!==undefined)
        {
            $('.cell').off()
            $('.turns').text('O wins')
            oWinsTimes++ ;
            $('#oWins').text('O wins: '+oWinsTimes)
            $('#playAgain').show()
        }
    else if(tableFills===8){
        $('.cell').off()
        tieTimes++
        $('#ties').text('Ties : '+tieTimes)
        $('#playAgain').show()
        $('.turns').text('Tie')
    }
    tableFills++;
    playerChanger = 1;
}


const playerTurn = function(event){
    if(playerChanger===1){
        if(computerPlaying===true && playerChoice===2){
            dsw
        }
        else{
            playerX(event)
        }
    }
    

    else if(playerChanger===2){
        if(computerPlaying===true && playerChoice===1){

        }
        else{
            playerO(event)
        }
    }
}


const playAgain = function(){
    $('.cell').html('')
    $('.cell').on('click',playerTurn)
    tableFills=0
    playerXWinsArray = []
    playerOWinsArray = []
    playerChanger = 1
    $('.turns').text('X turn')
    $('#playAgain').hide()
}


const clearHistory = function(){
    xWinsTimes = 0;
    oWinsTimes = 0;
    tieTimes = 0;
    $('#xWins').text('X wins: '+xWinsTimes)
    $('#oWins').text('O wins: '+oWinsTimes)
    $('#ties').text('Ties : '+tieTimes)
}



//event section
$('.cell').on('click',playerTurn);
$('#playAgain').on('click',playAgain)
$('#clearHistory').on('click',clearHistory)
$('#xToken').on('click',function(){
    playerChoice=1
    playerChanger=1
    $('#xToken').off;
    $('#oToken').off;
    $('#Token').hide()
    $('#xToken').hide()
    $('#oToken').hide()
    $('.turns').text('X turn')
})
$('#oToken').on('click',function(){
    playerChoice=2
    playerChanger=1
    $('#xToken').off;
    $('#oToken').off;
    $('#Token').hide()
    $('#xToken').hide()
    $('#oToken').hide()
    $('.turns').text('X turn')
})