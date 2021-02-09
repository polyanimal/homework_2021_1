/**
 * Создание ASCII шахматной доски
 * @param {number} size Размер шахматной доски
 * @returns {string} Текстовое представление доски из звёздочек и пробельчиков
 */
const chess = (size) => {
    if (size <= 1 || !Number.isInteger(Number(size)))
        return null;

    let board = '';
    let rowBlack = '* '.repeat(size / 2).concat(size % 2 === 0 ? '' : '*').concat('\n')
    let rowWhite = ' *'.repeat(size / 2).concat(size % 2 === 0 ? '' : ' ').concat('\n');
    board += (rowBlack + rowWhite).repeat(size / 2).concat(size % 2 === 0 ? '' : rowBlack);

    return board;
}

