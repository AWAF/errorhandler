/*jshint enforceall: true*/
/*jslint browser: true, devel: true*/
/*exported errorHandler*/

function ErrorHandler() {
    'use strict';
    var self = this;
    this.attachToWindow = function () {
        window.addEventListener('error', self.openErrorWindow);
    };
    this.openErrorWindow = function (errorMsg, url, lineNumber, column, errorObj) {
        alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber + ' Column: ' + column + ' Stack trace: ' + errorObj);
    };
}

var errorHandler = new ErrorHandler();