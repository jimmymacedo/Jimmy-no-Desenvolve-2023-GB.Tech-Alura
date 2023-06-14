const usuariosControlador = require('./usuarios-controlador');
const middleweresAutenticacao = require('./middlewares-autenticacao');
const passport = require('passport');
module.exports = app => {

  app
    .route('/usuario/login')
    .post(
      middleweresAutenticacao.local, 
      usuariosControlador.login
    );

  app
    .route('/usuario/logout')
    .get(
      middleweresAutenticacao.bearer,
      usuariosControlador.logout
    );

  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id')
    .delete(
      middleweresAutenticacao.bearer,
      usuariosControlador.deleta
    );
};
