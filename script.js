const phrases = [
    "Junior Frontend Developer"
];

let i = 0;
let j = 0;
let currentPhrase = "";
let isDeleting = false;

function loop() {
    const element = document.getElementById("changing-text");
    const fullText = phrases[i];
    if (!isDeleting) {
        currentPhrase = fullText.substring(0, j + 1);
        j++;

        if (j === fullText.length) {
            isDeleting = true;
            setTimeout(loop, 1200); // пауза перед удалением
            element.innerHTML = currentPhrase;
            return;
        }
    } else {
        currentPhrase = fullText.substring(0, j - 1);
        j--;

        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % phrases.length;
        }
    }
    element.innerHTML = currentPhrase;

    setTimeout(loop, isDeleting ? 70 : 140);
}

loop();