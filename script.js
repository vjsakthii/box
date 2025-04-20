const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const limitMessage = document.getElementById('limitMessage');
const maxLength = 200;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCount.textContent = `${length}/${maxLength} characters`;

  if (length >= maxLength) {
    limitMessage.classList.remove('hidden');
  } else {
    limitMessage.classList.add('hidden');
  }
});