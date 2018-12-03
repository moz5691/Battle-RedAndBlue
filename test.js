const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./app');
const db = require('./models/Game');
const expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

let request;