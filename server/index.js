const logger = require('./utils/logger.util');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('base');
});

app.listen(1234, () => {
    logger.info(`Model running at http://localhost:1234`);
});