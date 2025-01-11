// Array of text options for testing
const texts = [
    "function add(a, b) { return a + b; }",
    "const array = [1, 2, 3, 4, 5]; array.forEach(num => console.log(num));",
    "const array = [1, 2, 3, 4, 5]; array.forEach(num=>console.log(num));",
    "This is a simple typing test to measure your speed and accuracy."
];

let startTime;
let currentText = "";
let typedText = "";

// Function to normalize text (remove spaces and formatting differences)
function normalizeText(text) {
    return text.replace(/\s+/g, '').trim(); // Removes all whitespaces and trims the text
}

// Function to calculate typing speed (words per minute)
function calculateTypingSpeed() {
    const timeTaken = (new Date() - startTime) / 1000 / 60; // Time in minutes
    const wordsTyped = typedText.split(' ').length;
    const typingSpeed = Math.round(wordsTyped / timeTaken);
    return typingSpeed;
}

// Function to calculate accuracy
function calculateAccuracy() {
    const normalizedInput = normalizeText(typedText);
    const normalizedText = normalizeText(currentText);
    const correctChars = normalizedInput.split('').filter((char, index) => char === normalizedText[index]).length;
    const accuracy = Math.round((correctChars / normalizedText.length) * 100);
    return accuracy;
}

// Function to handle text change
function changeText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    currentText = texts[randomIndex];
    document.getElementById("text-to-type").innerText = currentText;
    document.getElementById("input-text").value = ""; // Reset the input field
    typedText = ""; // Reset the typed text
}

// Event listener for the input box to track typed text and calculate speed/accuracy
document.getElementById("input-text").addEventListener("input", (event) => {
    typedText = event.target.value;

    if (!startTime) {
        startTime = new Date(); // Start the timer when user starts typing
    }

    const typingSpeed = calculateTypingSpeed();
    const accuracy = calculateAccuracy();

    document.getElementById("typing-speed").innerText = `Typing Speed: ${typingSpeed} WPM`;
    document.getElementById("accuracy").innerText = `Accuracy: ${accuracy}%`;

    if (normalizeText(typedText) === normalizeText(currentText)) {
        alert("Congratulations! You've typed the text correctly.");
        startTime = null; // Reset timer
    }
});

// Event listener for the "Change Text" button
document.getElementById("change-text-button").addEventListener("click", changeText);

// Initialize with a random text on page load
changeText();