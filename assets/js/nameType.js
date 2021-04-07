let getName = document.getElementById('namelink')
let animation = [
    { n: '|', ms: 300 },
    { n: 'J|', ms: 200 },
    { n: 'Jef|', ms: 200 },
    { n: 'Jeff|', ms: 200 },
    { n: 'Jeffr|', ms: 200 },
    { n: 'Jeffre|', ms: 200 },
    { n: 'Jeffrey|', ms: 200 },
    { n: 'Jeffrey |', ms: 200 },
    { n: 'Jeffrey L|', ms: 200 },
    { n: 'Jeffrey Lu|', ms: 200 },
    { n: 'Jeffrey Lum' },
]

let stepD = 1
if (window.localStorage.setpD) {
    stepD = window.localStorage.stepD
}

let i = 0
let update = () => {
    let step = animation[i]
    getName.innerText = step.n
    i++

    if (i < animation.length) {
        setTimeout(update, step.ms / stepD)
    }

}
update()