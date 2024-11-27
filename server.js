import axios from 'axios';
const axios = require('axios');
const path = require('path');
const port = 3000;
const { connect } = require('./config/db');
const dotenv = require('dotenv');
connect();