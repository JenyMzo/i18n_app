'use strict';

module.exports = (app, i18n) => {
  app.get('/', function (req, res) {
    // var locale = 'en';
    // req.setLocale(locale);
    res.setLocale(req.cookies.i18n);
    res.render('main', {
    i18n: res
    })
  });

  // app.get('/de', function (req, res) {
  //   res.cookie('i18n', 'de');
  //   res.redirect('/')
  // });

  app.get('/es', function (req, res) {
    res.cookie('i18n', 'es');
    res.redirect('/')
  });

  app.get('/en', function (req, res) {
    res.cookie('i18n', 'en');
    res.redirect('/')
  });
}