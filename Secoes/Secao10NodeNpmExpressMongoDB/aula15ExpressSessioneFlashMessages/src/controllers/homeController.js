exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'Luiz', logado: true };
    //req.flash('info', 'Olá mundo!');
    //req.flash('error', 'deu erro');
    //req.flash('sucess', 'funcionou!');
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}

