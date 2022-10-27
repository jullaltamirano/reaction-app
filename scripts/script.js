let button = document.getElementById('circle')
let timerDiv = document.getElementById('timer')
let scoreSpan = document.getElementById('score')
let restartButton = document.getElementById('restart_button')
let highScoreSpan = document.getElementById('highscore')

button.addEventListener('click',game)
restartButton.addEventListener('click',restart)

// let second = 0
// let startCondition = null
// let timeOut
// let highScore

// button.innerHTML = 'GO!'

// function timerDraw(){
//     secondsSpan.innerHTML = second
// }

// function addSeconds(){
//     second++
//     timerDraw()
// }

// function startTimer(){
//     startCondition = setInterval(() => addSeconds(),1)
// }

// function stopGame(){
//     clearInterval(startCondition)
//     startCondition = null
//     button.style.backgroundColor = 'royalblue'    
//     button.style.fontSize = '2vw'
//     button.innerHTML = 'Good Job! Press Restart button to try again'    
//     setHighScore()
//     button.removeEventListener('click',game)
// }

// function changeColor(){
//     button.style.backgroundColor = 'green';
//     button.style.fontSize = '5vw'
//     button.innerHTML = 'STOP'
//     button.removeEventListener('click',error)
//     button.addEventListener('click',game)
//     startTimer()
// }

// function startGame(){
//     let startTimer = 2000 + Math.round(Math.random()*3000)
//     button.style.fontSize = '3vw'
//     button.innerHTML = 'Wait for green color'
//     button.removeEventListener('click',game)
//     button.addEventListener('click',error)
//     timeOut = setTimeout(() => changeColor(),startTimer)
// }

// function restart(){
//     stopGame()
//     clearTimeout(timeOut)
//     button.style.fontSize = '5vw'
//     button.innerHTML = 'GO!'
//     second = 0
//     button.removeEventListener('click',error)
//     button.addEventListener('click',game)
//     timerDraw()
// }

// function setHighScore(){
//     if(!highScore){
//         highScore = second
//         highScoreSpan.innerHTML = highScore
//     }
//     if(second !== 0 && second < highScore){
//         highScore = second
//         highScoreSpan.innerHTML = highScore
//     }
// }

// function game(){
//     if(startCondition){
//         stopGame()
//     } else {
//         startGame()
//     }
// }

// function error(){
//         clearTimeout(timeOut)
//         button.style.backgroundColor = 'rgb(182, 40, 40)'
//         button.style.fontSize = '2vw'
//         button.innerHTML = 'You clicked too early. Press Restart button to try again'
// }

//---------------------------------

let initialTime
let endTime
let startCondition = null
let timeOut
let highScore
let score = 0

button.innerHTML = 'GO!'

function timerDraw(){
    scoreSpan.innerHTML = `${score} ms`
}

function notDraw(){
    scoreSpan.innerHTML = ''
}

function startTimer(){
    startCondition = 1
    initialTime = new Date()
    initialTime = initialTime.getTime()
}

function endTimer(){
    endTime = new Date()
    endTime = endTime.getTime()
    score = endTime - initialTime
}

function stopGame(){
    endTimer()
    startCondition = null
    button.style.backgroundColor = 'royalblue'    
    button.style.fontSize = '2vw'
    button.innerHTML = 'Good Job! Press Restart button to try again'   
    timerDraw() 
    setHighScore()
    button.removeEventListener('click',game)
}

function changeColor(){
    button.style.backgroundColor = 'green';
    button.style.fontSize = '5vw'
    button.innerHTML = 'STOP'
    button.removeEventListener('click',error)
    button.addEventListener('click',game)
    startTimer()
}

function startGame(){
    let startTimer = 2000 + Math.round(Math.random()*3000)
    button.style.fontSize = '3vw'
    button.innerHTML = 'Wait for green color'
    button.removeEventListener('click',game)
    button.addEventListener('click',error)
    timeOut = setTimeout(() => changeColor(),startTimer)
}

function restart(){
    stopGame()
    notDraw()
    score = 0
    endTime = null
    clearTimeout(timeOut)
    button.style.fontSize = '5vw'
    button.innerHTML = 'GO!'
    button.removeEventListener('click',error)
    button.addEventListener('click',game)
}

function setHighScore(){
    if(!highScore){
        highScore = score
        highScoreSpan.innerHTML = `${highScore} ms`
    }
    if(score !== 0 && score < highScore){
        highScore = score
        highScoreSpan.innerHTML = `${highScore} ms`
    }
}

function game(){
    if(startCondition){
        stopGame()
    } else {
        startGame()
    }
}

function error(){
        clearTimeout(timeOut)
        button.style.backgroundColor = 'rgb(182, 40, 40)'
        button.style.fontSize = '2vw'
        button.innerHTML = 'You clicked too early. Press Restart button to try again'
}
