const playButton = document.getElementById("play")
playButton.addEventListener("click", throwDice)

const checkButton = document.getElementById("check")
checkButton.addEventListener("click", controllaMail)

const addButton = document.getElementById("add")
addButton.addEventListener("click", aggiungiMail)

const mailOut = document.getElementById("mailOutput")

let hint = 0
const hintMessage = "Prova una di queste:"

const listaMail = ["prova@gmail.com", "mail@gmail.com", "mailreale@gmail.com", "placeholder@mail.com", "test@mail.it"]


function throwDice(){
    let player = randomNumber(1,6)
    let cpu = randomNumber(1,6)

    const results = document.getElementById("results")
    const playerRoll = document.getElementById("playerDice")
    const cpuRoll = document.getElementById("cpuDice")

    playerRoll.innerHTML = player
    cpuRoll.innerHTML = cpu
    
    if(player>cpu){
        console.log("Win")
        results.innerHTML = "Hai vinto!"
        results.classList = "text-success"

    } else if (cpu>player){
        console.log("Lose")
        results.innerHTML = "Hai perso!"
        results.classList = "text-danger"

    } else {
        console.log("Draw")
        results.innerHTML = "Pareggio!"
        results.classList = "text-warning"
    }
}

function controllaMail(){
    let mailUtente = document.getElementById("userMail").value
    let checkHint = true
    for (let i=0; i < listaMail.length; i++){
        if(mailUtente == listaMail[i]){
            mailOut.innerHTML = "Mail trovata"
            checkHint=false
            i=listaMail.length
        } else {
            mailOut.innerHTML = "Mail non presente"
        }
    }
    if(checkHint){
        hint++
    }
    if(hint>3){
        document.getElementById("hintOut").innerHTML = hintMessage
        for(let i=0; i<listaMail.length; i++){
            document.getElementById("hintOut").innerHTML += `<li>${listaMail[i]}</li>`
        }
    }

}

function aggiungiMail(){
    let mailUtente = document.getElementById("userMail").value
    let flag = false

    for (let i=0; i < listaMail.length; i++){

        if(mailUtente == listaMail[i]){
            flag=true
        }
    }
    if(flag){
        mailOut.innerHTML = "Mail già presente, inseriscine un'altra"
    } else {
        listaMail.push(mailUtente)
        mailOut.innerHTML = "Nuova mail inserita!"
    }
    console.log(listaMail)
}

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}