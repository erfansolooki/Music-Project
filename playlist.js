const audio = document.querySelector('audio');
const image = document.querySelector('#image')
const playPauseBtn = document.querySelector('#play-pause');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#previous');
const songList = document.querySelector('.song-list');
const title = document.querySelector('#title');
const volSlider = document.querySelector('.slider');
const progressBar = document.getElementById('progress-bar');
// const currentTime = document.getElementById('currentTime');
// const durationTime = document.getElementById('durationTime');
// const close = document.querySelector('.close');

let arraySong = [];
let songHeading = '';
let songImage = [];
let songIndex = 0;
let isPlaying = false;

function loadAudio() {
    audio.src = arraySong[songIndex];
    image.src=songImage[songIndex];

    let songListItems = songList.getElementsByTagName('li');
    songHeading = songListItems[songIndex].getAttribute('data-name');
    title.innerHTML = songHeading;

    // Highlights
    for( i = 0 ; i < songListItems.length ; i++ ) {
        songListItems[i].classList.remove('active')
    }

    songList.getElementsByTagName('li')[songIndex].classList.add('active');
};

function loadSongs() {
    let songs = document.getElementsByTagName('li');
    for( i = 0 ; i < songs.length ; i++ ) {
        arraySong.push(songs[i].getAttribute('data-src'))
        songImage.push(songs[i].getAttribute('data-img'))
    };

    loadAudio()
};

loadSongs();

function playAudio() {
    audio.play()
    playPauseBtn.querySelector('i').classList.remove('bi-caret-right');
    playPauseBtn.querySelector('i').classList.add('bi-pause');
    isPlaying = true;
   
}

function nextSong() {
    songIndex++;
    if( songIndex > arraySong.length - 1 ) {
        songIndex = 0;
    };
    loadAudio();
    playAudio();
}

function previousSong() {
    songIndex--;
    if( songIndex < 0 ) {
        songIndex = arraySong.length - 1 ;
    };
    loadAudio();
    playAudio();
}

function pauseAudio() {
    audio.pause()
    playPauseBtn.querySelector('i').classList.add('bi-caret-right');
    playPauseBtn.querySelector('i').classList.remove('bi-pause');
    isPlaying = false;
}

// close.addEventListener( 'click' , function() {
//     document.querySelector('.player').style.visibility = 'hidden';
//     close.style.visibility = 'hidden'
//     audio.pause()
// })


playPauseBtn.addEventListener( 'click' , function() {
    if(isPlaying) {
        pauseAudio()
    } else {
        playAudio()
    }
} ,false);

nextBtn.addEventListener('click' , function() {
    nextSong();
},false);

prevBtn.addEventListener('click' , function() {
    previousSong();
},false);

songList.addEventListener( 'click' , function(e) {
    songIndex = e.target.closest('li').getAttribute('data-index');
    // document.querySelector('.player').style.visibility = 'visible'
    // close.style.visibility = 'visible'
    loadAudio();
    playAudio();
},false);

audio.addEventListener('ended' , function() {
    nextSong();
})

volSlider.addEventListener( 'input' , function() {
    audio.volume = volSlider.value / 100;
},false);

function progressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);
    durationTime.textContent = formatTime(audio.duration);
}

setInterval(progressValue, 500);

function formatTime(sec) {
let minutes = Math.floor(sec / 60);
let seconds = Math.floor(sec - minutes * 60);
if (seconds < 10) {
    seconds = `0${seconds}`;
}
if (minutes < 10) {
    minutes = `0${minutes}`
}
return `${minutes}:${seconds}`;
}

function changeProgressBar() {
audio.currentTime = progressBar.value;
}

progressBar.addEventListener("click", changeProgressBar);
