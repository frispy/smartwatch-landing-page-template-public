isClose = true
document.querySelector('.m-header__nav-button').onclick = () => {
    if (isClose === true) {
        document.querySelector('.header__mobile').classList.remove('m_header_close')
        document.querySelector('.header__mobile').classList.add('m_header_open')
        document.querySelector('.header__nav-mobile').classList.add('m_header_mobile_nav_open')
        document.querySelector('.header__nav-mobile').classList.remove('m_header_mobile_nav_close')
        isClose = false
    } else if (isClose === false) {
        document.querySelector('.header__mobile').classList.add('m_header_close')
        document.querySelector('.header__mobile').classList.remove('m_header_open')
        document.querySelector('.header__nav-mobile').classList.remove('m_header_mobile_nav_open')
        document.querySelector('.header__nav-mobile').classList.add('m_header_mobile_nav_close')
        isClose = true
    }

}

const featureBackgroundLife = document.querySelector('.feature__life-content')

window.addEventListener('scroll', function() {
    featureBackgroundLife.style.backgroundPositionY = -window.pageYOffset/9 +'px'
})

document.querySelector('.nav-home').onclick = () => {
    document.querySelector('.home__section').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-features').onclick = () => {
    document.querySelector('.feature__water').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-select').onclick = () => {
    document.querySelector('.feature__custom').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-buy').onclick = () => {
    document.querySelector('.shop__section').scrollIntoView({behavior: "smooth"})
}

document.querySelector('.nav-home-f').onclick = () => {
    document.querySelector('.home__section').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-features-f').onclick = () => {
    document.querySelector('.feature__water').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-select-f').onclick = () => {
    document.querySelector('.feature__custom').scrollIntoView({behavior: "smooth"})
}
document.querySelector('.nav-buy-f').onclick = () => {
    document.querySelector('.shop__section').scrollIntoView({behavior: "smooth"})
}

document.querySelector('.nav-home-m').onclick = () => {
    document.querySelector('.home__section').scrollIntoView({behavior: "smooth"})
    document.querySelector('.m-header__nav-button').click()
}
document.querySelector('.nav-features-m').onclick = () => {
    document.querySelector('.feature__water').scrollIntoView({behavior: "smooth"})
    document.querySelector('.m-header__nav-button').click()
}
document.querySelector('.nav-select-m').onclick = () => {
    document.querySelector('.feature__custom').scrollIntoView({behavior: "smooth"})
    document.querySelector('.m-header__nav-button').click()
}
document.querySelector('.nav-buy-m').onclick = () => {
    document.querySelector('.shop__section').scrollIntoView({behavior: "smooth"})
    document.querySelector('.m-header__nav-button').click()
}



// SCROLLREVEAL STUFF

const sr = ScrollReveal({
    distance: '60px',
    duration: 1000,
    delay: 200,
    // reset: true
})

sr.reveal(`article`)
sr.reveal(`.shop__product`, {origin: 'left'})
sr.reveal(`.feature__image`, {origin: 'left'})
sr.reveal(`.feature__text`, {origin: 'right'})
sr.reveal(`.app_first`, {origin: 'right'})
sr.reveal(`.app_second`, {origin: 'left'})
sr.reveal(`.feature__actions-text`, {origin: 'bottom'})





