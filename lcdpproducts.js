var known = {
  en: true,
  fr: true,
  ar: true,
  es: true
};
var lang = ((navigator.languages && navigator.languages[0]) && navigator.language || navigator.userLanguage || 'en').substr(0, 3);
if (!known[lang])
  lang = 'en';
$('div.detectd[lang=' + lang + ']').show();
$('div.detectd[lang!=' + lang + ']').hide();
