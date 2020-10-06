const play = document.getElementById('play')

const start = 9 * 60 + 21
const end = 10 * 60 + 58
const audio = new Audio('../Naaniem/01 Moshol Naneeim - Music.mp3')
audio.currentTime = start
audio.addEventListener('timeupdate', () =>
    audio.currentTime >= end ? (audio.currentTime = start) : 0
)

play.addEventListener('click', () => {
    if (audio.paused) {
        audio.play()
        play.innerText = 'pause'
    } else {
        audio.pause()
        play.innerText = 'play'
    }
})
