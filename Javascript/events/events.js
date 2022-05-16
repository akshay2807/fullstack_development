const btn = document.querySelector('#v2');

// btn.onclick = function () {
//     console.log("you clicked me...!!!")
//     console.log("Hope it worked")
// }

function scream() {
    console.log("AAAHHHH");
    console.log("Stop touching")
}
// btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked h1..!!!')
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("clicked");
})
const btn4 = document.querySelector('#v3');
btn3.addEventListener('click', scream)

function twist() {
    console.log("TWIST")
}
function shout() {
    console.log("SHOUT")
}

const tasbutton = document.querySelector("#tas")

// tasbtn.addEventListener("click", twist)
// tasbutton.onclick = twist;
// tasbutton.onclick = shout;

tasbutton.addEventListener('click', twist, { once: true })
tasbutton.addEventListener('click', shout)
