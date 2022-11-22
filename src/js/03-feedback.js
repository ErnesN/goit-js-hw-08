import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';
// 1. Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message,
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// 2. Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми.
// В іншому випадку поля повинні бути порожніми.
// 3. Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email,
// message та їхніми поточними значеннями.
// 4. Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
const refs = {
  form: document.querySelector('.feedback-form'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onInputForm, 500));
refs.form.addEventListener('submit', onFormSubmit);
window.addEventListener('load', updateOutputOnload);

function onInputForm(e) {
  e.preventDefault();
  const message = refs.form.elements.message.value;
  const email = refs.form.elements.email.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
}

function updateOutputOnload(e) {
  e.preventDefault();
  const outputObjectContent = JSON.parse(
    localStorage.getItem(LOCALSTORAGE_KEY)
  ) || {
    email: '',
    message: '',
  };
  const { email, message } = outputObjectContent;
  refs.form.elements.email.value = email;
  refs.form.elements.message.value = message;
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log({ email: email.value, message: message.value });
  localStorage.clear();
  refs.form.reset();
}
