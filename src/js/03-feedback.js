import trottle from 'lodash.throttle';


const contactFormEl = document.querySelector('.feedback-form');
const STOKE_KEY = 'feedback-form-state';
let userData = {};

const fillContactFormField = () => {
const userDataFromLS = JSON.parse(localStorage.getItem(STOKE_KEY)); 
  if (userDataFromLS === null) {
    return;
  }

  for (const key in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(key)) {
      contactFormEl.elements[key].value = userDataFromLS[key];
      if (userDataFromLS[key]) {
        userData[key] = userDataFromLS[key];
      }
    }
  }

};

fillContactFormField();

const onContactFormFieldChange = ({ target: contactFormField }) => {
  const contactFormFieldValue = contactFormField.value;
  const contactFormFieldName = contactFormField.name;
  // console.log('userData: ', userData);
  userData[contactFormFieldName] = contactFormFieldValue;

  localStorage.setItem(STOKE_KEY, JSON.stringify(userData) );

};

const onContactFormSubmit = event => {
  event.preventDefault();
  console.log(userData)

  contactFormEl.reset();
  localStorage.removeItem(STOKE_KEY);
  userData={}
};

contactFormEl.addEventListener('input', trottle(onContactFormFieldChange, 500));
contactFormEl.addEventListener('submit', trottle(onContactFormSubmit,500));


