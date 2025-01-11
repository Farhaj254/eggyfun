 let likeCount = 0;
        let dislikeCount = 0;
        let isLiked = false;
        let isDisliked = false;

       document.addEventListener("DOMContentLoaded", function () {
    const gameCards = document.querySelectorAll(".game-card");
    const gameFrame = document.getElementById("game-frame");

    function loadGame(url, title) {
        if (gameFrame) {
            // Update the iframe source
            gameFrame.src = url;

            // Update the page title
            document.title = `Playing: ${title}`;

            // Update the browser URL without refreshing
            history.pushState({ game: title }, title, `?game=${title}`);
        }
    }

    // Add click event listeners to all game cards
    gameCards.forEach(card => {
        card.addEventListener("click", function () {
            const url = card.getAttribute("data-url");
            const title = card.getAttribute("data-title");

            loadGame(url, title);
        });
    });

    // Handle back/forward navigation
    window.addEventListener("popstate", function (event) {
        if (event.state && event.state.game) {
            loadGame(`media/games/${event.state.game}.html`, event.state.game);
        }
    });
});

        function toggleLike() {
            const likeButton = document.getElementById("like-button");
            const dislikeButton = document.getElementById("dislike-button");
            if (isLiked) {
                likeButton.style.backgroundColor = '#333';
                likeCount--;
                isLiked = false;
            } else {
                likeButton.style.backgroundColor = '#00FF00';  // Green for like
                likeCount++;
                isLiked = true;
                if (isDisliked) {
                    dislikeButton.style.backgroundColor = '#333';  // Reset dislike
                    dislikeCount--;
                    isDisliked = false;
                }
            }
            updateButtonCounts();
        }

        function toggleDislike() {
            const likeButton = document.getElementById("like-button");
            const dislikeButton = document.getElementById("dislike-button");
            if (isDisliked) {
                dislikeButton.style.backgroundColor = '#333';
                dislikeCount--;
                isDisliked = false;
            } else {
                dislikeButton.style.backgroundColor = '#FF0000';  // Red for dislike
                dislikeCount++;
                isDisliked = true;
                if (isLiked) {
                    likeButton.style.backgroundColor = '#333';  // Reset like
                    likeCount--;
                    isLiked = false;
                }
            }
            updateButtonCounts();
        }

        function updateButtonCounts() {
            document.getElementById("like-count").textContent = likeCount;
            document.getElementById("dislike-count").textContent = dislikeCount;
        }

        function toggleFullscreen() {
            const iframe = document.querySelector("iframe");
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) { // Firefox
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            }
        }
 function toggleDarkMode() {
            document.body.classList.toggle('dark-mode');
            document.querySelector('header').classList.toggle('dark-mode');
        }
// Toggle Hamburger Menu
function toggleMenu() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.toggle('show');
}

// Search Bar Toggle
function toggleSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-input');

    // Toggle 'active' class
    overlay.classList.toggle('active');

    // Focus input field if active
    if (overlay.classList.contains('active')) {
        input.focus();
    } else {
        input.value = ''; // Clear input when closing
    }
}

// Event listener to close overlay when Escape is pressed
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('search-overlay');
        if (overlay.classList.contains('active')) {
            toggleSearchOverlay();
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach((card) => {
        card.addEventListener("click", () => {
            const gameTitle = card.getAttribute("data-title");
            const gameUrl = card.getAttribute("data-url");

            // Update URL with game details
            window.location.href = `play.html?title=${encodeURIComponent(gameTitle)}&url=${encodeURIComponent(gameUrl)}`;
        });
    });
});
