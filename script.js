const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const result = document.getElementById('result');

  function isPalindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  checkBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    if (inputText === '') {
      alert('Please input a value');
      return;
    }
    
    const isPalin = isPalindrome(inputText);
    if (isPalin) {
      result.textContent = `${inputText} is a palindrome`;
    } else {
      result.textContent = `${inputText} is not a palindrome`;
    }
  });