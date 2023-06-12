const { Router } = require('express');

const { Page } = require('../services/Index');
const page = new Router();

page.get('/', Page.landing).get('/:uri', Page.uri).get('/contact', Page.contact).post('/contact', Page.sendEmail)

module.exports = page;
