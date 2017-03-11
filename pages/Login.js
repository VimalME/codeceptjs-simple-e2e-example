'use strict';

let I;

module.exports = {

    _init() {
        I = actor(); // require('../steps_file.js')();
    },

    // insert your locators and methods here

    loginFormEl: () => '.loginForm',
    loingButtonEl: () => '.loginButton',
    // amrit.gc@introcept.co
    // nioipAG6Sx
    fields: {
        email: '#email',
        password: '#password',
    },
    submitButton: '.loginButton',
    sendForm(email, password) {
        I.amOnPage('/auth/login');
        I.fillField(this.fields.email, email);
        I.fillField(this.fields.password, password);
        I.click(this.submitButton);
    }
}