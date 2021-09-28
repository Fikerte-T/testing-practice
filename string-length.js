function stringLength(string){
    return (string.length <= 10 && string.length >= 1)? string.length : ((function() {throw 'number our of range'}()))  ;
}


module.exports = stringLength;
