const textarea = document.getElementById("countCharactersInput");
const charCountDisplay = document.getElementById("charCount");

textarea.addEventListener("input", () => {
  charCountDisplay.textContent = "Characters: " + textarea.value.length;
});
