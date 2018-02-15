'use strict';

const fs = require('fs');
const promisify = require('./promisify');

if (!fs.promises) {
    fs.promises = promisify(fs);
}
