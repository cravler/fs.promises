'use strict';

const fs = require('fs');
const Module = require('module');
const promisify = require('./promisify');

let fsPromises;
try {
    fsPromises = require('fs/promises');
} catch (e) {
    fsPromises = promisify(fs);
    const originalRequire = Module.prototype.require;
    Module.prototype.require = function (id) {
        if ('fs/promises' == id) {
            return fsPromises;
        }
        return originalRequire.apply(this, arguments);
    };
}

module.exports = fsPromises;
