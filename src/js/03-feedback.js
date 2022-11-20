import throttle from "lodash.throttle";
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
}
const STORAGE_KEY_MESSAGE = 'feedback-form-state';
const STORAGE_KEY_EMAIL = 'formData';

refs.form.addEventListener('submit', onSubmitForm);
refs.inputMessage.addEventListener('input', throttle(onTextareaImput, 500));
refs.form.addEventListener('input', getFormDataToLS);
const formData = {};
const getFormDataToLS = STORAGE_KEY_EMAIL => JSON.parse(localStorage.getItem(setFormDataFromLS));
const setFormDataFromLS = e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY_EMAIL, JSON.stringify(formData));
}

// const formEl = document.querySelector('.feedback-form');
// const inputEl = document.querySelector('input[name="email"]');
// const textareaEl = document.querySelector('textarea[name="message"]');

// formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onDataToForm, 500));

// // const throttle = require('lodash.throttle'); //викликаю throttle → частина бібліотеки Lodash

// saveDataTextarea();

// function onDataToForm(e) {
//   const emailValue = e.currentTarget.elements.email.value;
//   const msgValue = e.currentTarget.elements.message.value;

//   const arrayEntryData = { email: emailValue, message: msgValue };

//   localStorage.setItem('feedback-form-state', JSON.stringify(arrayEntryData)); //записую масив введених даних в localStorage
// }

// function saveDataTextarea() {
//   const saveTextarea = JSON.parse(localStorage.getItem('feedback-form-state'));

//   if (saveTextarea) {
//     inputEl.value = saveTextarea.email || ''; // Можливо ці умови слід поєднати!
//   }
//   if (saveTextarea) {
//     textareaEl.value = saveTextarea.message || '';
//   }
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   const dataLocalStorage = JSON.parse(
//     localStorage.getItem('feedback-form-state')
//   );

//   if (dataLocalStorage) {
//     console.log('Введені дані: ', dataLocalStorage); // Вивожу в консоль масив введених даних
//   }

//   localStorage.removeItem('feedback-form-state'); //Видаляю дані з localStorage

//   e.currentTarget.reset(); //Очищаю поля форми
// }


// const savedEmail = localStorage.getItem('formData');
// const parsedEmail = JSON.parse(savedEmail);

populateMessageOutput();
function onSubmitForm(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY_MESSAGE);
}


function onTextareaImput(evt) { 
    const message = evt.target.value;
    localStorage.setItem(STORAGE_KEY_MESSAGE, message);
}


function populateMessageOutput() {
    const savedMessage = localStorage.getItem(STORAGE_KEY_MESSAGE);
    if (savedMessage) {
     refs.inputMessage.value = savedMessage;   
    }
}