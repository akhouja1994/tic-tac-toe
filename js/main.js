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
let oWin=false
$('#playAgain').hide()
$('#Token').hide()
$('#xToken').hide()
$('#oToken').hide()
$('.computerOption').hide()


//functions section
const playerX = function (event) {
    $(event.target).html('<img src="assest/x.png" alt="X">');
    $(event.target).off()
    $('.turns').text('O turn')
    playerXWinsArray[$(event.target).attr('id')]='X';
    if(computerPlaying===true && tableFills<=7){
        easyComputerO()
    }
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
    if(computerPlaying===true){
        playerChanger=1
    }
}


const playerO = function (event) {
    $(event.target).html('<img src="assest/o-png-89-images-in-collection-page-2-png-o-200_200.png" alt="O">');
    $(event.target).off()
    $('.turns').text('X turn')
    playerOWinsArray[$(event.target).attr('id')]='O';
    tableFills++;
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
            oWin=true
        }
    else if(tableFills===9){
        $('.cell').off()
        tieTimes++
        $('#ties').text('Ties : '+tieTimes)
        $('#playAgain').show()
        $('.turns').text('Tie')
    }
    if(computerPlaying===true && oWin ===false){
        easyComputerX()
    }
    playerChanger = 1;
    if(computerPlaying===true){
        playerChanger=2
    }
}

const easyComputerX = function (){
    let i = true;
    while(i===true ){
        j=Math.floor(Math.random()*9);
        if(playerXWinsArray[j]==null && playerOWinsArray[j]==null){
            playerXWinsArray[j]='X'
            $('#'+j).html('<img src="assest/x.png" alt="X">')
            $('.turns').text('O turn')
            playerChanger=2
            i=false
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
        }
    }
}

const easyComputerO = function (){
    let i = true;
    while(i===true){
        j=Math.floor(Math.random()*9);
        if(playerOWinsArray[j]==null && playerXWinsArray[j]==null){
            playerOWinsArray[j]='O'
            $('#'+j).html('<img src="assest/o-png-89-images-in-collection-page-2-png-o-200_200.png" alt="O">')
            $('.turns').text('X turn')
            playerChanger=1
            i=false
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
                    oWinsTimes++
                    $('#oWins').text('O wins: '+oWinsTimes)
                    $('#playAgain').show()
                }
            tableFills++;
        }
    }
}


const playerTurn = function(event){
    if(playerChanger===1){
        playerX(event)

    }
    

    else if(playerChanger===2){

 
        playerO(event)
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
    oWin=false
    if(computerPlaying===true && playerChoice===2){
        easyComputerX()
    }
}


const clearHistory = function(){
    xWinsTimes = 0;
    oWinsTimes = 0;
    tieTimes = 0;
    $('#xWins').text('X wins: '+xWinsTimes)
    $('#oWins').text('O wins: '+oWinsTimes)
    $('#ties').text('Ties : '+tieTimes)
}


function myFunction(x) {
    x.classList.toggle("change");
    $('nav').toggleClass('nav')
    $('nav').toggleClass('change')
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
    easyComputerX()
})
$('#computer').on('click',function(){
    $('.aiLevel').show()

    computerPlaying=true;
})
$('#easy').on('click',function(){
    $('.aiLevel').hide()
    $('#Token').show()
    $('#xToken').show()
    $('#oToken').show()
})
$('#normal').on('click',function(){
    $('.aiLevel').hide()
    $('#Token').show()
    $('#xToken').show()
    $('#oToken').show()
})
$('#unbeatable').on('click',function(){
    $('.aiLevel').hide()
    $('#Token').show()
    $('#xToken').show()
    $('#oToken').show()
})
$('#twoPlayers').on('click',function(){
    playerChanger=1
    $('.turns').text('X turn')
    computerPlaying=false
})