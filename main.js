const outPut = document.querySelector(".output") ;
const allNums = document.querySelectorAll("p") ;
const nums = document.querySelector(".nums") ;
let randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 10){
    randomNumber = `0${randomNumber}`
}
let myArr = [];
let storedNums = [] ; 
let spans = document.querySelectorAll("span")
let chance = 0 ;
let content = document.querySelector(".res-cont")
start()
console.log(randomNumber)

    var secondsElement = document.getElementById('seconds');
    var startTime = performance.now();
    var seconds;
    function updateSeconds() {
      var elapsedTime = performance.now() - startTime;
      seconds = Math.floor(elapsedTime / 1000);
    }

    // Update the seconds every second
    setInterval(updateSeconds, 1000);


function start(){

    for(let num in allNums){
        
        allNums[num].onclick = () => {
            // playClickSound()
            myArr.push(allNums[num].innerHTML)
            storedNums.push(myArr.join(""))
            for(let i = 0 ; i < storedNums.length ; i++){
                if(storedNums[i].length < 2){
                    storedNums.splice(i , 1)
                    chance++
                }
                if(storedNums[i] < randomNumber && storedNums[i].length == 2){
                    // playSound()
                    spans[i].innerHTML = `<i class="fa-solid fa-arrow-up" />`
                 } else if (storedNums[i] > randomNumber && storedNums[i].length == 2){
                    spans[i].innerHTML = `<i class="fa-solid fa-arrow-down"></i>`
                 }
                 if(chance == 5 && storedNums[i] != randomNumber && storedNums[i]?.length == 2){
                    
                     content.style.display = "block"
                     content.style.textAlign = "center"
                     content.style.marginTop = "100px"
                     content.innerHTML = `<h2 class="finish">GAME OVER !</h2>
                     <h3>The correct Number is <span>${randomNumber} </span></h3>
                     <h4>Duration : <span>${seconds} seconds</span></h4>
                     `
                     againBtn()
                    
                     centerMessage()
                     document.querySelector(".finish").classList.add('celebrate')
                 } else if (storedNums[i] == randomNumber){
    
                    // playSound()
                    content.style.display = "block"
                    content.style.textAlign = "center"
                    content.style.marginTop = "100px"
                    content.innerHTML = `<h2 class = "finish" style="color: cornsilk;">Congratulations!</h2>
                        <h3> You guessed the correct number: <span>${randomNumber}</span> </h3>
                        <h4>Duration : <span>${seconds} seconds</span></h4>
                    `;
                    centerMessage()
                    document.querySelector(".finish").classList.add('celebrate')
                    againBtn()
                 } 

            }
            console.log(chance)
                appending();
            } 
        }
}



function appending(){
    let res =  document.createElement("div");
    res.className = "res";
    if(myArr.length == 1){
        res.innerHTML = myArr[0]
        outPut.appendChild(res)
    } else if(myArr.length == 2){
        outPut.lastElementChild.innerHTML = myArr.join("")
        myArr = []
    }
}


function centerMessage() {
    content.style.display = "flex";
    content.style.flexDirection = "column";
    content.style.alignItems = "center";
    content.style.justifyContent = "center";
    content.style.textAlign = "center";
    content.style.marginTop = "25vh";
    content.style.transform = "translateY(-50%)";
}



// function playClickSound() {
//     // Create an Audio object
//     var audio = new Audio('click.mp3'); // replace 'path/to/click-sound.mp3' with the actual path to your sound file
//     // Play the sound
//     audio.play();
//   }
//   function playSound() {
//     // Create an Audio object
//     var lose = new Audio('wrong.mp3'); // replace 'path/to/click-sound.mp3' with the actual path to your sound file
//     var win = new Audio('win.mp3');
    
//     // Check if any of the stored numbers is correct
//     let correctGuess = false;
//     for (let i = 0; i < storedNums.length; i++) {
//         if (storedNums[i] == randomNumber) {
//             correctGuess = true;
//             break;
//         }
//     }

//     // Play the sound based on the result
//     if (correctGuess) {
//         win.play();
//     } else if (chance == 5) {
//         // Introduce a delay before playing the lose sound
//         setTimeout(() => {
//             lose.play();
//         }, 10); // Adjust the delay time as needed
//     }
// }


 function againBtn(){
    nums.innerHTML = `<button class="again">Play Again!</button>`
    nums.firstElementChild.style.backgroundColor = 'rgb(60 62 64)'
    nums.firstElementChild.style.color = '#f16fa3'
    nums.firstElementChild.style.cursor = 'pointer'
    nums.firstElementChild.style.border = 'none'
    nums.firstElementChild.style.padding = '20px 25px'
    nums.firstElementChild.style.borderRadius = '10px'
    nums.firstElementChild.style.fontSize = '28px'
    nums.firstElementChild.style.fontWeight = 'bold'
    nums.firstElementChild.onclick = function(){
        location.reload()
    }
 }

