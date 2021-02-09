const chess = (N) => {
    if (N <= 1 || !Number.isInteger(Number(N)))
        return null;

    let board = '';
    let rowBlack = '* '.repeat(N / 2).concat(N % 2 === 0 ? '' : '*').concat('\n')
    let rowWhite = ' *'.repeat(N / 2).concat(N % 2 === 0 ? '' : ' ').concat('\n');
    board += (rowBlack + rowWhite).repeat(N / 2).concat(N % 2 === 0 ? '' : rowBlack);

    return board;
}

