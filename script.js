const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


function isPalindrome(event) {
    event.preventDefault();
    const inputText = textInput.value.trim();

    if (!inputText) {
        alert("Please input a value");
        return;
    }

    const cleanedText = inputText.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    const reversedText = cleanedText.split("").reverse().join("");
    
    //display result
    if (reversedText === cleanedText) {
        result.innerHTML = `<span class="bold">${inputText}</span> is a palindrome`;
    } else {
        result.innerHTML = `<span class="bold">${inputText}</span> is not a palindrome`;
    }

    // Clear the input field after checking
    textInput.value = '';
}

checkBtn.addEventListener('click', isPalindrome);
