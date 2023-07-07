const btnBtn = document.getElementById('btn');

btnBtn.addEventListener('click', () => {
  setTimeout(() => {
    const text = document.getElementById('text');
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});

