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
    button: document.querySelector('button'),
}
const STORAGE_KEY_MESSAGE = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onSubmitForm);
refs.inputMessage.addEventListener('input', throttle(onTextareaImput, 2000));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
});

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