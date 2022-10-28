const Account = require('../models/account');

module.exports = {
    index
  };

  function index(req, res) {
    console.log('err');
    Account.find({}, function(err, accounts) {
      res.render('accounts/index', { title: 'Account', accounts });
    });
  }