const playButton = document.getElementById("play")
playButton.addEventListener("click", throwDice)

function throwDice(){
    let player = randomNumber(1,6)
    let cpu = randomNumber(1,6)

    const results = document.getElementById("results")
    const playerRoll = document.getElementById("playerDice")
    const cpuRoll = document.getElementById("cpuDice")

    playerRoll.innerHTML = player
    cpuRoll.innerHTML = cpu
    
    if(player>cpu){
        console.log("Hai vinto!")
        results.innerHTML = "Hai vinto!"
        results.classList = "text-success"

    } else if (cpu>player){
        console.log("Hai perso!")
        results.innerHTML = "Hai perso!"
        results.classList = "text-danger"

    } else {
        console.log("Pareggio!")
        results.innerHTML = "Pareggio!"
        results.classList = "text-warning"

    }
}

function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}