(function () {
    const content_1 = document.querySelector('#home .main-content .home-sub-content2 #typing-effect');
    const text = content_1.textContent;
    content_1.textContent = ''; // Clear original text

    // Create spans for each letter
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        if (i === 0) {
            span.classList.add('first-letter');
        }
        content_1.appendChild(span);
        // span.style.fontSize = "20px";
    }

    const spans = content_1.querySelectorAll('span');

    // Animate letters showing one by one
    let index = 0;
    function showNextLetter() {
        if (index < spans.length) {
            spans[index].style.opacity = '1';
            index++;
            setTimeout(showNextLetter, 30);  // interval between letters (150ms)
        }
    }
    showNextLetter();
})();