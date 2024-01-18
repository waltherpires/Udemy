import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Cadastro from './modules/Cadastro';

//Login e Criar Conta
const login = new Login('.form-login');
const cadastro = new Login('.form-cadastro');
login.init();
cadastro.init();

//Cadastrar contato
const contatoCadastro = new Cadastro('.form-contatoCadastro');
const contatoEdit = new Cadastro('.form-contatoEdit');
contatoCadastro.init();
contatoEdit.init();
