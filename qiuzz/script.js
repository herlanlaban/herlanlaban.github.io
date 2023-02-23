const girlfriendName = prompt("Siapa nama pacarmu?");
const quizUrl = "https://example.com/quiz";
const shareMessage = `Hai ${girlfriendName}, ayo coba main kuis cinta ini! ${quizUrl}`;

const shareLink = document.createElement("a");
shareLink.href = quizUrl;
shareLink.textContent = "Bagikan kuis";
shareLink.onclick = function() {
  window.open(
    `https://wa.me/?