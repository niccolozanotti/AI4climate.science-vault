function my_function(type, authorString, year, doi) {
    if (type === 'article' || type === 'book') {
        console.log(type);
        const authors = authorString.split(', ');

        let authorOutput;
        if (authors.length > 2) {
            authorOutput = authors[0] + ' et al.';
        } else if (authors.length === 2) {
            authorOutput = authors.join(', ');
        } else {
            authorOutput = authors[0]; // In case there's only one author
        }

        return 'Author: ' + authorOutput + '\nYear: ' + year + '\nDOI: ' + doi;
    } else {
        return '';
    }
}

module.exports = my_function;
