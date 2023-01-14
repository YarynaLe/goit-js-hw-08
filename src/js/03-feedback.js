
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onTextareaInput(event) {
  const message = event.target.value;

  localStorage.setItem(STORAGE_KEY,message);
}

populatedTextArea();

function populatedTextArea() {
  const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedFormData) {
    refs.email.value = savedFormData.email;
    refs.textarea.value = savedFormData.message;
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
