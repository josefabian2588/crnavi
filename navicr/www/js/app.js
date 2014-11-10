// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('navigarcr', ['ionic', 'pascalprecht.translate', 'starter.controllers'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      
      
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
      
      
      
      
      //IDIOMAS
       if(typeof navigator.globalization !== "undefined") {
    navigator.globalization.getPreferredLanguage(function(language) {
        $translate.use((language.value).split("-")[0]).then(function(data) {
            console.log("SUCCESS -> " + data);
        }, function(error) {
            console.log("ERROR -> " + error);
        });
    }, null);
}
      
      if(window.navigator && window.navigator.splashscreen) {
      window.navigator.splashscreen.hide();
    }
      
      
  });
})









.config(function($translateProvider) {
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

