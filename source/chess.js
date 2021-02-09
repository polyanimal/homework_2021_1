const chess = N => {
    if (N <= 1 || !Number.isInteger(Number(N)))
        return null;

    let res = '';
    for (let j = 0; j < N; ++j) {
        for (let i = 0; i < N; ++i){
            if ((j + i) % 2 === 0)
                res += '*';
            else
                res += ' ';
        }
        
        res += '\n';
    }

    return res;
}
