document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })

// input.addEventListener('keyup', function () {
//     console.log("keyup")
// })

window.addEventListener('keydown', function (e) {
    //console.log(e.code) we can also use switch and modify keys
    switch (e.code) {
        case 'ArrowUp':
            console.log("Up");
            break;
        case 'ArrowDown':
            console.log("Down");
            break;
        case 'ArrowLeft':
            console.log("Left");
            break;
        case 'ArrowRight':
            console.log("Right");
            break;
        default:
            console.log("Ignored!!")
    }
})