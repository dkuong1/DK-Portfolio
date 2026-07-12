const focusText = document.getElementById('focusText');

const focusMessages = [
  'Practicing one SQL problem and writing one short insight from the results.',
  'Reviewing a Python notebook and cleaning one messy dataset.',
  'Writing a clear business summary for a small data project.'
];

if (focusText) {
  const today = new Date();
  const index = today.getDate() % focusMessages.length;
  focusText.textContent = focusMessages[index];
}
