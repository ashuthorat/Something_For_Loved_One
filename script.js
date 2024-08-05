document.getElementById('wish-btn').addEventListener('click', function() {
	document.getElementById('wish-message').innerHTML = 'चांद तेरी रोशनी का हलका सा एक साया हैं. <br> पुरी दुनिया का सबसे बडा हीरा मैने पाया हैं. <br> दोस्त कर रहे थे फ्लेक्स अपनी अपनी बंदियो का. <br> पर उन्हे क्या पता सबसे प्यारा पिस तो मैने ही पटाया हैं.!';
	document.querySelector('.confetti-container').style.display = 'block';
	setTimeout(function() {
		var confettiContainer = document.querySelector('.confetti-container');
		for (var i = 0; i < 100; i++) {
			var confetti = document.createElement('div');
			confetti.className = 'confetti';
			confetti.style.left = Math.random() * window.innerWidth + 'px';
			confetti.style.animationDelay = Math.random() * 3 + 's';
			confettiContainer.appendChild(confetti);
		}
	}, 1000);
});

