function openLetter() {
    document.getElementById('teddyBox').style.transform = 'translateY(150px) scale(0.8)';
    document.getElementById('bookContent').style.display = 'block';
    setTimeout(() => {
        document.getElementById('bookContent').classList.add('open');
    }, 10);
}

function closeLetter() {
    document.getElementById('bookContent').classList.remove('open');
    document.getElementById('teddyBox').style.transform = 'translateY(0) scale(1)';
    setTimeout(() => {
        document.getElementById('bookContent').style.display = 'none';
    }, 600);
}

function showPage(num) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('p' + num).classList.add('active');
}

// Countdown Logic
const bday = "Dec 31, 2025 00:00:00"; // SET HER BIRTHDAY HERE
const target = new Date(bday).getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = target - now;
    
    document.getElementById('d').innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('h').innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('m').innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('s').innerText = Math.floor((diff % (1000 * 60)) / 1000);
}, 1000);