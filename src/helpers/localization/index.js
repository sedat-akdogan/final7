import {I18n} from 'i18n-js';

const i18n = new I18n({
  en: {
    hello: 'Hello',
    login: 'Login',
    logout: 'Logout',
    signup: 'Signup',
    email: 'Email',
    password: 'Password',
    hello_world: 'Hello World',
    enteremail: 'enter your email ...',
    enterpassword: 'enter your password',
    gotosignup: 'go to signup',
    thisistheloginpage: 'This is the login page',
    thisistheSignuppage: 'This is the Signup page',
    home: 'Home',
    myplace: 'My Place',
    language: 'EN',
  },
  fr: {
    hello: 'Bonjour',
    login: 'Se connecter',
    logout: 'Se déconnecter',
    signup: "S'inscrire",
    email: 'Email',
    password: 'Mot de passe',
    hello_world: 'Bonjour le monde',
    enteremail: 'entrez votre email ...',
    enterpassword: 'entrez votre mot de passe',
    gotosignup: "aller à l'inscription",
    thisistheloginpage: 'Ceci est la page de connexion',
    thisistheSignuppage: 'Ceci est la page d inscription',
    home: 'Accueil',
    myplace: 'Mes endroits',
    language: 'FR',
  },
});

export default i18n;