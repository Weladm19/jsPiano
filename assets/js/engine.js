let audio = new Audio("./assets/tunes/a.wav")

const playTune = (key)=>{
    audio.src = `assets/tunes/${key}.wav` 
    audio.play()

    const clickedKey = document.querySelector(`[data-key = "${key}"] `)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)
}

const pianoKeys = document.querySelectorAll('.piano-keys .key')


document.addEventListener('keydown' , function(e){
    playTune(e.key)
})

