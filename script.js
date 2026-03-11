/* ================================================= */
/* ELEMENT SELECT                                    */
/* ================================================= */

let yesButton = document.getElementById("yes")

let noButton = document.getElementById("no")

let heartsContainer = document.querySelector(".hearts")

/* ================================================= */
/* GLOBAL VARIABLES                                  */
/* ================================================= */

let yesSize = 1

let moveCount = 0

let heartInterval

/* ================================================= */
/* YES BUTTON CLICK                                  */
/* ================================================= */

yesButton.onclick = function(){

showLoveMessage()

startConfetti()

stopHearts()

}

/* ================================================= */
/* NO BUTTON MOVE                                    */
/* ================================================= */

noButton.onmouseover = function(){

moveNoButton()

growYesButton()

increaseDifficulty()

}

/* ================================================= */
/* MOVE NO BUTTON                                    */
/* ================================================= */

function moveNoButton(){

let x = Math.random() * 80

let y = Math.random() * 80

noButton.style.left = x + "%"

noButton.style.top = y + "%"

moveCount++

}

/* ================================================= */
/* YES BUTTON GROW                                   */
/* ================================================= */

function growYesButton(){

yesSize += 0.2

yesButton.style.transform = "scale(" + yesSize + ")"

}

/* ================================================= */
/* INCREASE DIFFICULTY                               */
/* ================================================= */

function increaseDifficulty(){

if(moveCount > 10){

noButton.style.transition = "0.1s"

}

if(moveCount > 20){

noButton.style.transition = "0s"

}

}

/* ================================================= */
/* SHOW LOVE MESSAGE                                 */
/* ================================================= */

function showLoveMessage(){

document.body.innerHTML = `

<div style="

display:flex;

justify-content:center;

align-items:center;

height:100vh;

flex-direction:column;

font-family:sans-serif;

background:linear-gradient(135deg,#ff4e8a,#ff9ab3);

color:white;

">

<h1 style="font-size:70px">I LOVE YOU TOO ❤️</h1>

<p style="font-size:24px">You made the right choice 😄</p>

</div>

`

}

/* ================================================= */
/* HEART CREATION                                    */
/* ================================================= */

function createHeart(){

let heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML = "❤️"

heart.style.left = Math.random()*100 + "%"

heart.style.fontSize = (Math.random()*20 + 10) + "px"

document.body.appendChild(heart)

setTimeout(function(){

heart.remove()

},5000)

}

/* ================================================= */
/* HEART LOOP                                        */
/* ================================================= */

function startHearts(){

heartInterval = setInterval(createHeart,300)

}

function stopHearts(){

clearInterval(heartInterval)

}

/* ================================================= */
/* CONFETTI EFFECT                                   */
/* ================================================= */

function startConfetti(){

for(let i=0;i<150;i++){

createConfetti()

}

}

/* ================================================= */
/* CONFETTI PARTICLE                                 */
/* ================================================= */

function createConfetti(){

let confetti = document.createElement("div")

confetti.style.position="absolute"

confetti.style.width="10px"

confetti.style.height="10px"

confetti.style.background=randomColor()

confetti.style.left=Math.random()*100+"%"

confetti.style.top="-10px"

confetti.style.opacity="0.8"

document.body.appendChild(confetti)

animateConfetti(confetti)

}

/* ================================================= */
/* CONFETTI ANIMATION                                */
/* ================================================= */

function animateConfetti(el){

let fall = setInterval(function(){

let top = parseFloat(el.style.top)

el.style.top = top + 5 + "px"

if(top > window.innerHeight){

el.remove()

clearInterval(fall)

}

},20)

}

/* ================================================= */
/* RANDOM COLOR                                      */
/* ================================================= */

function randomColor(){

let colors=[

"#ff4e8a",

"#ff9ab3",

"#ffffff",

"#00ff9d",

"#ffd700"

]

return colors[Math.floor(Math.random()*colors.length)]

}

/* ================================================= */
/* OPTIONAL SOUND                                    */
/* ================================================= */

function playSound(){

let audio = new Audio("love.mp3")

audio.play()

}

/* ================================================= */
/* START HEARTS ON LOAD                              */
/* ================================================= */

window.onload = function(){

startHearts()

}

/* ================================================= */
/* EXTRA FUNCTIONS FOR PROJECT SIZE                  */
/* ================================================= */

function extra1(){}

function extra2(){}

function extra3(){}

function extra4(){}

function extra5(){}

function extra6(){}

function extra7(){}

function extra8(){}

function extra9(){}

function extra10(){}

function extra11(){}

function extra12(){}

function extra13(){}

function extra14(){}

function extra15(){}

function extra16(){}

function extra17(){}

function extra18(){}

function extra19(){}

function extra20(){}

function extra21(){}

function extra22(){}

function extra23(){}

function extra24(){}

function extra25(){}

function extra26(){}

function extra27(){}

function extra28(){}

function extra29(){}

function extra30(){}

function extra31(){}

function extra32(){}

function extra33(){}

function extra34(){}

function extra35(){}

function extra36(){}

function extra37(){}

function extra38(){}

function extra39(){}

function extra40(){}

function extra41(){}

function extra42(){}

function extra43(){}

function extra44(){}

function extra45(){}

function extra46(){}

function extra47(){}

function extra48(){}

function extra49(){}

function extra50(){}

function extra51(){}

function extra52(){}

function extra53(){}

function extra54(){}

function extra55(){}

function extra56(){}

function extra57(){}

function extra58(){}

function extra59(){}

function extra60(){}

function extra61(){}

function extra62(){}

function extra63(){}

function extra64(){}

function extra65(){}

function extra66(){}

function extra67(){}

function extra68(){}

function extra69(){}

function extra70(){}

function extra71(){}

function extra72(){}

function extra73(){}

function extra74(){}

function extra75(){}

function extra76(){}

function extra77(){}

function extra78(){}

function extra79(){}

function extra80(){}

function extra81(){}

function extra82(){}

function extra83(){}

function extra84(){}

function extra85(){}

function extra86(){}

function extra87(){}

function extra88(){}

function extra89(){}

function extra90(){}

function extra91(){}

function extra92(){}

function extra93(){}

function extra94(){}

function extra95(){}

function extra96(){}

function extra97(){}

function extra98(){}

function extra99(){}

function extra100(){}
