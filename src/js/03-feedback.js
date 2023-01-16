
import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   email: document.querySelector('.feedback-form input'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextareaInput, 500));


// function onTextareaInput(event) {
//   const formName = event.target.name;
//   const formValue = event.target.value;

//   formData[formName] = formValue;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// populatedTextArea();

// function populatedTextArea() {
//   const savedFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));

//   if (savedFormData) {
//     refs.email.value = savedFormData.email;
//     refs.textarea.value = savedFormData.message;
//   }
// }

//  function onFormSubmit(event) {
//   event.preventDefault();
//   if (formData.email === '' || formData.message === '') {
//     alert('Заповніть всі поля!');
//     return
//   }
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
//  }


// function onFormSubmit(event) {
//   event.preventDefault();
//   event.currentTarget.reset();
//   localStorage.removeItem(STORAGE_KEY);
// }


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