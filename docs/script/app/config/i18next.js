define(function(){
  var i18nextConfig = {
    debug: true,
    lng: window.navigator.userLanguage || window.navigator.language || 'hu',
    fallbackLang: 'hu',
    defaultNS: 'translation',
    resGetPath : 'script/app/locale/__lng__/__ns__.json',
    backend: {
      loadPath: 'script/app/locale/{{lng}}/{{ns}}.json'
    }
  };
  return i18nextConfig;
});