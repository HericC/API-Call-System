module.exports = (cpf) => {
    if (!cpf.lenght === 11) return false;

    let validate = true;
    for (const value of cpf) {
        if (parseInt(value) !== parseInt(cpf[0])) {
            validate = false;
            break;
        }
    };

    if (validate) return false;

    let firstResult = 0;
    for (let i = 0; i < 9; i++) firstResult += (parseInt(cpf[i]) * (10 - i));
    firstResult = (firstResult * 10) % 11;

    let secondResult = 0;
    for (let i = 0; i < 10; i++) secondResult += (parseInt(cpf[i]) * (11 - i));
    secondResult = (secondResult * 10) % 11;

    if (firstResult === 10) firstResult = 0;
    if (secondResult === 10) secondResult = 0;

    if (firstResult === parseInt(cpf[9]) && secondResult === parseInt(cpf[10])) return true;
    return false;
}
