
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                     }, 1000)
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'violet';
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('violet', 1000, () => {
    delayedColorChange('indigo', 1000, () => {
        delayedColorChange('blue', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('yellow', 1000, () => {
                    delayedColorChange('red', 1000, () => {

                    })
                })
            })
        })
    })
})

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        //if its works, run this
    }, () => {
        //if it doesn't work, run this
    }, () => {
        //if API is down, or request failed
    })
})