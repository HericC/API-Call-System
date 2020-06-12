module.exports = (phone) => {
    for (const i of phone) if (!parseInt(i)) return false;
    return true;
}
