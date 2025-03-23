require.config({
    baseUrl: "src",
    paths: {
        "jquery": "../node_modules/jquery/dist/jquery.min",
        "underscore": "../node_modules/underscore/underscore-min",
        "backbone": "../node_modules/backbone/backbone-min",
        "backbone.marionette": "../node_modules/backbone.marionette/lib/backbone.marionette.min"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        "backbone.marionette": {
            deps: ["backbone"],
            exports: "Marionette"
        }
    }
});

require(["app"], function(app) {
    app.mount();
});
