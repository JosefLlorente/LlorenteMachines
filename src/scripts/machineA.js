const replaceAllInput = document.getElementById('replaceAllInput');
const replaceAllOutput = document.getElementById('replaceAllOutput');

replaceAllInput.addEventListener('input', () => {
  const inputText = replaceAllInput.value;

  const outputText = inputText.replace(/ /g, "");
  replaceAllOutput.value = outputText;
});