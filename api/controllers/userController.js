const con = require('../database/connection');
const cpfValidation = require('../helpers/cpfValidation');
const phoneValidation = require('../helpers/phoneValidation');

module.exports.login = (req, res) => {
    const errors = [];

    if (req.body.user === undefined || req.body.user === '') errors.push('user not defined');
    if (req.body.password === undefined || req.body.password === '') errors.push('password not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call login("${req.body.user}", "${req.body.password}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result[0] });
    });
}

module.exports.addUser = (req, res) => {
    const errors = [];

    if (req.body.cpf === undefined || req.body.cpf === '') errors.push('cpf not defined')
    else if (!cpfValidation(req.body.cpf)) errors.push('invalid cpf');
    if (req.body.name === undefined || req.body.name === '') errors.push('name not defined');
    if (req.body.user === undefined || req.body.user === '') errors.push('user not defined');
    if (req.body.password === undefined || req.body.password === '') errors.push('password not defined');
    else if (req.body.password.length < 8) errors.push('password too small');
    if (req.body.phone === undefined) errors.push('phone not defined');
    else if (!phoneValidation(req.body.phone)) errors.push('invalid phone');
    if (req.body.manager === undefined || req.body.manager === '') errors.push('manager not defined');
    if (req.body.id_sector === undefined || req.body.id_sector === '') errors.push('id_sector not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call insert_user("${req.body.cpf}", "${req.body.name}", "${req.body.user}", "${req.body.password}", 
    "${req.body.phone}", "${req.body.manager}", "${req.body.id_sector}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}
module.exports.updatePassowrd = (req, res) => {
    const errors = [];

    if (req.body.id === undefined) errors.push('id not defined');
    if (req.body.password === undefined || req.body.password === '') errors.push('password not defined');
    else if (req.body.password.length < 8) errors.push('password too small');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call update_password_user("${req.body.id}", "${req.body.password}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}
