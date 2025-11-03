// script.js - For index.html
function startQuiz() {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert('Введите название симптома!');
        return;
    }
    // Encode query for URL
    const encodedQuery = encodeURIComponent(query);
    window.location.href = `quiz.html?symptom=${encodedQuery}`;
}

// Enter key support
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        startQuiz();
    }
});