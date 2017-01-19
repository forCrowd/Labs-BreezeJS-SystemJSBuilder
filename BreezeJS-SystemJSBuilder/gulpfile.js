///<binding ProjectOpened="default" />
"use strict";

var exec = require("child_process").exec,
    gulp = require("gulp");

gulp.task("default", ["build"]);

// Uses breeze.base.debug.js and separate adapters
gulp.task("build", ["compile-typescript"], function () {
    build("systemjs.config.js");
});

// Uses breeze.debug.js and gets "Multiple anonymous defines" error
gulp.task("build-breeze.debug", ["compile-typescript"], function () {
    build("systemjs-breeze.debug.config.js");
});

gulp.task("compile-typescript", compileTypescript);

function compileTypescript() {
    return new Promise(function (resolve, reject) {
        return exec("node_modules\\.bin\\tsc", function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            resolve();
        });
    });
}

function build(systemJsConfig) {
    var Builder = require("systemjs-builder");
    var builder = new Builder("", "./" + systemJsConfig);

    return builder.buildStatic("app", "./app/app.js", { encodeNames: false })
        .catch(function (error) {
            console.log("error", error);
        });
}
