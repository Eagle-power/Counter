const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");
const numCount = document.getElementById("num-count");
const specialCharCount = document.getElementById("special-char-count");


textInput.addEventListener("input", () => {
  const text = textInput.value;
  const words = text.trim().split(/\s+/);
  wordCount.textContent = words.length;
  charCount.textContent = text.length;
  numCount.textContent = text.match(/[0-9]/g)?.length || 0;
  specialCharCount.textContent = text.match(/[^A-Za-z0-9]/g)?.length || 0;
});