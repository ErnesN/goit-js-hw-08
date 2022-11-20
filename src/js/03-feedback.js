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
  inputEmail: document.querySelector('input'),
  inputMessage: document.querySelector('textarea'),
};
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

populateMessageOutput();

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onTextareaImput, 500));

function onSubmitForm(e) {
  e.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  if (e.target.email.value === '' || e.target.message.value === '') {
    alert('Enter email and message,please!');
    return;
  } else {
    console.log(formData);
    e.currentTarget.reset();
  }
}

function onTextareaImput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateMessageOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) return;
  console.log(savedMessage);
  refs.inputMessage.value = savedMessage['message'] || '';
  refs.inputEmail.value = savedMessage['email'] || '';
}
