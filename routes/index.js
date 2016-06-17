var login = require("../controller/loginController");
var index = require("../controller/indexController");
var menu = require("../controller/menu/menuController");
module.exports = function(app){
  app.get('/', function (req, res) {
    res.render('login', { title: 'Express' });
  });
  login(app);
  index(app);
  menu(app);
};
