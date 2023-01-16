
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

let formData = {
  email: '',
  message: '',
};

const stringFormData = localStorage.getItem(LOCALSTORAGE_KEY);
if (stringFormData) {
  fillFormOnLoad(stringFormData);
}
refs.form.addEventListener('input', throttle(onTextFieldInput, 500));
refs.form.addEventListener('submit', onSubmitForm);


function onSubmitForm(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Заповніть всі поля!');
    return
  }
  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}


function onTextFieldInput(event) {
  if (localStorage.getItem(LOCALSTORAGE_KEY) === null) {
    formData = {
      email: '',
      message: '',
    }
  }
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}


function fillFormOnLoad(str) {
  try {
    formData = JSON.parse(str);
    for (const key in formData) {
      refs.form.elements[key].value = formData[key];
    }
  } catch (error) {
    error.name;
    error.message;
  }
}