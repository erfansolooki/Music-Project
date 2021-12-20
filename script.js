// LIKE MANAGE
let heart = document.querySelectorAll('i');
heart.forEach(item => {
    item.addEventListener('click' , () => {
        item.classList.toggle('red')
    })
})

// MORE SONGS BUTTON IN MAIN PAGE
const moreSongs = document.querySelector('#more');
const moreSongsBtn = document.querySelector('#more-song-buttons');
const downIcon = document.querySelector('.down-icon');
const moreText = document.querySelector('.more-text');
const lessText = document.querySelector('.less-text');

moreSongsBtn.addEventListener( 'click' , function() {
    if(moreSongs.style.display === 'none') {
        moreSongs.style.display = 'flex';
        downIcon.classList.remove('bi-chevron-down');
        downIcon.classList.add('bi-chevron-up');
        lessText.style.display = 'inline-block'
        moreText.style.display = 'none'
    } else {
        moreSongs.style.display = 'none';
        downIcon.classList.add('bi-chevron-down');
        downIcon.classList.remove('bi-chevron-up');
        lessText.style.display = 'none'
        moreText.style.display = 'inline-block'
    }
});

// NAVBAR ACTIVE CLASS MANAGE
const navbar = document.querySelectorAll('.navbar-nav a');
navbar.forEach( item => {
    item.addEventListener( 'click' , function() {
        document.querySelector('a.selected').classList.remove('selected');
        this.classList.add('selected')
    })
}); 