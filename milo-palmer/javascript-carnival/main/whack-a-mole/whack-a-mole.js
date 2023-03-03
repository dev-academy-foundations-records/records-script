// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

const cellsArray = document.getElementsByTagName('td')

const countHeader = document.getElementById('count')

const restartBtn = document.getElementById('restartTimer')

restartBtn.addEventListener('click', restartTimer)

let count = 0

let highScore = 0

let lastNum

let randomIndex = getRandomNumber()

let randomCell = cellsArray[randomIndex]

showMole()

let mole = document.getElementById('mole')

mole.addEventListener('click', whackedMole)

function getRandomNumber() {
  //store variable that was that last random number
  //if new random number isn't the same return if it is re run the function
  let num = Math.floor(Math.random() * cellsArray.length)
  // let num = Math.floor(Math.random() * 2)
  // console.log(num != lastNum)
  // if (num != lastNum) {
  //   lastNum = num
  //   console.log(lastNum, num)
  return num
  // } else {
  //   console.log('this ran' + lastNum, num)
  //   getRandomNumber()
  // }
}

function showMole() {
  for (let i = 0; i < cellsArray.length; i++) {
    if (randomCell == cellsArray[i]) {
      cellsArray[i].innerHTML = `<img id="mole" src="mole.PNG" >`
    }
  }
}

function whackedMole() {
  if (timeleft >= 0) {
    cellsArray[randomIndex].innerHTML = ''
    randomIndex = getRandomNumber()
    randomCell = cellsArray[randomIndex]
    playAudio()
    countHeader.textContent = `Times whacked: ${++count}`
    showMole()
    mole = document.getElementById('mole')
    mole.addEventListener('click', whackedMole)
  }
}

function playAudio() {
  document.getElementById('audio').play()
}

let timeleft = 10

function restartTimer() {
  document.getElementById('timerContainer').innerHTML = ''
  timeleft = 10
  count = 0
  countHeader.textContent = `Times whacked: ${count}`
  const downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer)
      document.getElementById('countdown').innerHTML = 'Finished'
      document.getElementById(
        'timerContainer'
      ).innerHTML = `<button id="restartTimer" onclick="restartTimer()">Start Timer</button>`
      showHighScore()
    } else {
      document.getElementById('countdown').innerHTML =
        timeleft + ' seconds remaining'
    }
    timeleft -= 1
  }, 1000)
}

function showHighScore() {
  if (count > highScore) {
    highScore = count
    alert(`You hit ${count} moles that round thats your new highscore!`)
  } else if (count == highScore) {
    alert(
      `You hit ${count} moles that round that ties your highscore keep going!`
    )
  } else {
    alert(
      `You hit ${count} moles that round your current highscore is: ${highScore}`
    )
  }
}
