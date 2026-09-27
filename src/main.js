import './style.css';

const likeBtn = document.querySelector('#likeBtn');
let liked = false;

likeBtn.addEventListener('click', () => {
    liked = !liked;
    likeBtn.textContent = liked ? 'Liked ❤️' : 'Like';
    likeBtn.classList.toggle('liked', liked);
});