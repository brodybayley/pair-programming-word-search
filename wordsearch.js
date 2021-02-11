const wordSearch = (letters, word) => {
    //Horizontal stuff:
    const horizontalJoin = letters.map(ls => ls.join(''));
    //Vertical Stuff:
    const transpose = function (matrix) {
        let newArr = [];
        for (let i = 0; i < matrix[0].length; i++) {
            let tempArr = [];
            for (let j = 0; j < matrix.length; j++) {
                tempArr.push(matrix[j][i]);
            }
            newArr.push(tempArr.join(''));
        }
        return newArr;
    };
    let vertical = transpose(letters);
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }
    for (l of vertical) {
        if (l.includes(word)) {
            return true;
        }
    }
    if (word === '') {
        return undefined;
    } else {
        return false;
    }
}

module.exports = wordSearch