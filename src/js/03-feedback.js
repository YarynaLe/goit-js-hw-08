import throttle from 'lodash.throttle';

const formRefs = document.querySelector('.feedback-form');
const inputRefs = document.querySelector('[name="email"]');
const textareaRefs = document.querySelector('[name="message"]');
const STORAGE_KEY = 'feedback-form-state';
let allData = {};

contantInput();

formRefs.addEventListener('input', throttle(onTextareaInput, 500));
formRefs.addEventListener('submit', onFormSubmit);

function onTextareaInput(e) {
  allData[e.target.name] = e.target.value;
  console.log(allData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;

  if (email.value === '' || message.value === '') {
    return;
  }
  console.log(allData);
  e.currentTarget.reset();
  removeInputValues();
}
function removeInputValues() {
  allData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
}

function contantInput() {
  const inputValue = localStorage.getItem(STORAGE_KEY);
  try {
    const data = JSON.parse(inputValue);
    Object.entries(data).forEach(([key, value]) => {
      allData[key] = value;
      formRefs.elements[key].value = value;
    });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

}