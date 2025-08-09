var timer = 60
var score = 0
var hit

function bubbleGenrator(){
    var bubble = ''
    for(var i =1; i<=120;i++){
        var rn = Math.floor(Math.random()*10)
        bubble+=`<div class="bubble">${rn}</div>`
    }
    document.querySelector('.pannel-bottom').innerHTML=bubble
}
function newHit(){
    hit = Math.floor(Math.random()*10)
    document.querySelector('#hit').textContent = hit
}
function runTimer(){
    var rTimer = setInterval(function(){
        if(timer>0){
            timer-- ;   
            document.querySelector('#timer').textContent = timer
        }
        else{
            clearInterval(rTimer)
            document.querySelector('.pannel-bottom').innerHTML = `<h1>Game Over<h1/>`
        }
    },1000)
}

function scoreIncrease(){
    score+=10
    document.querySelector('#score').textContent=score
}

document.querySelector('.pannel-bottom').addEventListener('click',function (dets){
    var userClicked = Number(dets.target.textContent)
    if(userClicked===hit){
        scoreIncrease()
        bubbleGenrator()
        newHit()
    }
})

runTimer()
bubbleGenrator()
newHit()

