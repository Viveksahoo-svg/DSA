/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title.split(' ').map(word => 
        word.length < 3 ? word.toLowerCase() : 
        word[0].toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
};