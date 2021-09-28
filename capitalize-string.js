function capitalizeString(string) {
    const loweCase = string.toLowerCase();
    return string.charAt(0).toUpperCase() + loweCase.slice(1);
}

module.exports = capitalizeString
