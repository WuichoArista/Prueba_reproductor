const play = document.getElementById('play')
const pause = document.getElementById('pause')
const adelante = document.getElementById('adelante')
const atras = document.getElementById('atras')
const video = document.getElementById('video')
const progreso = document.getElementById('progreso')

const handlePlay = () => {
    video.play()
    play.hidden = true
    pause.hidden = false
    
}

const handlePause = () => {
    video.pause()
    pause.hidden = true
    play.hidden = false

}

const handleAtras = () => {
    video.currentTime -= 10

}

const handleAdelante = () => {
    video.currentTime += 10
}

const handleLoaded = () => {
   progreso.max = video.duration
}

const handleTime = () => {
    progreso.value = video.currentTime
}

const handleProgreso = () => {
    video.currentTime = progreso.value
}

play.addEventListener( 'click' , handlePlay )

pause.addEventListener( 'click' , handlePause )

atras.addEventListener( 'click' , handleAtras )

adelante.addEventListener( 'click' , handleAdelante )

video.addEventListener( 'loadedmetadata' , handleLoaded )

video.addEventListener( 'timeupdate' , handleTime )

progreso.addEventListener( 'input' , handleProgreso )