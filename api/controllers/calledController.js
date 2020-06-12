const con = require('../database/connection');

module.exports.viewsCalleds = (req, res) => {
    con.query('select * from called_view;', (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.addCalled = (req, res) => {
    const errors = [];

    if (req.body.theme === undefined || req.body.theme === '') errors.push('theme not defined');
    if (req.body.note === undefined) errors.push('note not defined');
    if (req.body.id_user === undefined || req.body.id_user === '') errors.push('id_user not defined');
    if (req.body.id_equipment === undefined || req.body.id_equipment === '') errors.push('id_equipment not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call inset_called("${req.body.theme}", "${req.body.note}", "${req.body.id_user}", 
    "${req.body.id_equipment}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.updateTechnical = (req, res) => {
    const errors = [];

    if (req.body.id_called === undefined || req.body.id_called === '') errors.push('id_called not defined');
    if (req.body.id_user === undefined || req.body.id_user === '') errors.push('id_user not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call update_technical_called("${req.body.id_called}", "${req.body.id_user}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.updateSolution = (req, res) => {
    const errors = [];

    if (req.body.id_called === undefined || req.body.id_called === '') errors.push('id_called not defined');
    if (req.body.solution === undefined || req.body.solution === '') errors.push('solution not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call update_solution_called("${req.body.id_called}", "${req.body.solution}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.concludedCalled = (req, res) => {
    const errors = [];

    if (req.body.id_called === undefined || req.body.id_called === '') errors.push('id_called not defined');
    if (errors.length) return res.json({ 'error': { 'msg': errors } });

    con.query(`call concluded_called("${req.body.id_called}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}
