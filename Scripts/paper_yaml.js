function my_function (type, authorString, year, doi) {

    if (type === 'article' || type === 'book') {
        console.log(type)
        return 'Author: ' + authorString +'\nYear: ' + year + '\nDOI: ' + doi
    }
    else {
        return ''
    }
}

module.exports = my_function;
