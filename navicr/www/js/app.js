// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app=angular.module('navigarcr', ['ionic', 'pascalprecht.translate'])


app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
      url: '/',
      views: {
        home: {
          templateUrl: 'terms.html'
        }
      }
    });

    $stateProvider.state('info', {
      url: '/info',
      views: {
        info: {
          templateUrl: 'info.html'
        }
      }
    });
    
 
    
    
});






app.config(function($translateProvider) {
        $translateProvider.translations("en", {
            terms_nd_condi:"License Terms & Conditions",
             terms_1:"This app is offered free 'as is'.",
             terms_2:"Drive carefully, don’t use while driving.",
             terms_3:"We are not responsible for misuse or accidents.",
             terms_4:"Not for commercial, if so please contact us.",
             terms_5:"This app requires 3G high speed Internet to work.",
             continue:"Continue",
            Menu:"Menu"
             
            
        });

         $translateProvider.translations("es", {
            terms_nd_condi:"Términos y condiciones",
             terms_1:"Este app es ofrecido Gratis 'tal cual'.",
             terms_2:"Conduzca responsablemente, no utilice mientras maneja.",
             terms_3:"No somos responsables por accidentes utilizando este app.",
             terms_4:"NO para uso comercial, si es el caso por favor contáctenos (Acerca De).",
             terms_5:"Este app requiere de conexión a Internet permanente para funcionar.",
             continue:"Continuar",
             Menu:"Menu"
            
        });

        $translateProvider.preferredLanguage("es");
        $translateProvider.fallbackLanguage("es");
        
});






