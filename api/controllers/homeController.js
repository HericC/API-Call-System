const con = require('../database/connection');
const routeDetails = require('../database/routeDetails.json');

module.exports.home = (req, res) => {
    return res.json(routeDetails);
}

module.exports.viewsSectors = (req, res) => {
    con.query('select * from sector_view;', (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result });
    });
}

module.exports.viewsEquipment = (req, res) => {
    con.query(`call select_equipment("${req.params.id}");`, (err, result, field) => {
        if (err) return res.json({ 'error': err });
        return res.json({ 'success': result[0] });
    });
}
