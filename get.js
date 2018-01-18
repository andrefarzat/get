
module.exports = function get(obj, path) {
    var index = path.split('.');
    var value = obj || {};

    for (var i = 0; i < index.length; i++) {
        value = value[index[i]];

        if (value === null || typeof value !== 'object') {
            break;
        }
    }

    return index.length - 1 == i ? value : undefined;
};