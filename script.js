// Простая обработка формы: показываем сообщение вместо отправки
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    if (!name || !email) {
      result.textContent = 'Пожалуйста, заполните имя и email.';
      return;
    }
    result.textContent = 'Спасибо! Сообщение принято (пока только локально).';
    form.reset();
  });
});
