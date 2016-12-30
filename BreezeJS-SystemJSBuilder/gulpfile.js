///<binding ProjectOpened="default" />
"use strict";

var gulp = require("gulp");

gulp.task("default", ["build"]);

// Uses breeze.base.debug.js and separate adapters
gulp.task("build", function () {
    build("systemjs.config.js");
});

// Uses breeze.debug.js and gets "Multiple anonymous defines" error
gulp.task("build-breeze.debug", function () {
    build("systemjs-breeze.debug.config.js");
});

function build(systemJsConfig) {
    var Builder = require("systemjs-builder");
    var builder = new Builder("", "./" + systemJsConfig);

    return builder.buildStatic("app", "./app/app.js", { encodeNames: false })
        .catch(function (error) {
            console.log("error", error);
        });
}
