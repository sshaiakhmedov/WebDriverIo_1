// const HOST = 'https://stage.pasv.us';
const urlRegister='https://stage.pasv.us/user/register';
const urlLogin='https://stage.pasv.us/user/login';
const urlDiary='https://stage.pasv.us/diary';
const email=Math.random().toFixed(4)+'e.shayakhmedov@gmail.com';

const user ={
  firstName: 'John',
  lastName: 'Shaiakhmedov',
  password: 'password',
  phone: '12345678900',
  email: email,
  about: '123',
  goals: 'paradise',
  englishLevel: 'Upper intermediate',
};

const pageReg={
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit',
};

const pageRegSelector={
  h1:'h1',
  descr: 'p',
  submitB: 'form button',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalInput: 'form textarea[name="goals"]',
  englishInput: 'form select[name="englishLevel"]',
};

const pageLog={
  title: 'Progress Monitor',
  h1: 'User Login',
};

const pageConfirmation = {
  h1: 'You are a new user',
};

const admin = {
  emailLogin: 'olya6avg@gmail.com',
  password: '11111',
};

module.exports={ admin, urlDiary, urlRegister, urlLogin, user, pageReg, pageRegSelector, pageLog, pageConfirmation};
