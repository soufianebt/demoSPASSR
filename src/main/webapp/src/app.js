define(["jquery", "underscore", "backbone", "backbone.marionette"], 
    function($, _, Backbone, Marionette) {
        Backbone.$ = window.jQuery = $;
        Marionette.$ = window.jQuery = $;
    
        // Template simple
        const template = _.template('<h1>Hello, <%= name %>!</h1>');
    
        // Définition de la vue
        const MyView = Marionette.ItemView.extend({
            template: template,
            serializeData: function() {
                return { name: 'Backbone & Marionette 1.8.8 Avec Require' };
            }
        });

        // Application Marionette
        const MyApp = new Backbone.Marionette.Application();

        // Single-SPA lifecycle methods
        function bootstrap() {
            return Promise.resolve();
        }

        function mount() {
            return new Promise((resolve, reject) => {
                try {
                    let container = document.getElementById('app');
                    if (!container) {
                        container = document.createElement('div');
                        container.id = 'app';
                        document.body.appendChild(container);
                    }

                    // Définition de la région principale
                    MyApp.addRegions({
                        mainRegion: '#app'
                    });

                    // Démarrage de l'application et affichage de la vue
                    MyApp.on('start', function() {
                        const myView = new MyView();
                        console.log("Marionette app started inside Single-SPA");
                        MyApp.mainRegion.show(myView);
                    });

                    MyApp.start();
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }

        function unmount() {
            return new Promise((resolve, reject) => {
                try {
                    // Cleanup: remove the region container
                    const container = document.getElementById('app');
                    if (container) {
                        container.remove();
                    }
                    resolve();
                } catch (error) {
                    reject(error);
                }
            });
        }

        return {
            bootstrap,
            mount,
            unmount
        };
    });
