
const letterN = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterN[i] = [];
    for (let j = 0; j < columns; j++) {
        letterN[i][j] = 1;
    }
}

letterN[0][0] = 0
letterN[1][0] = 0
letterN[2][0] = 0
letterN[3][0] = 0
letterN[4][0] = 0
letterN[5][0] = 0
letterN[6][0] = 0

letterN[2][1] = 0
letterN[3][2] = 0
letterN[4][3] = 0

letterN[0][4] = 0
letterN[1][4] = 0
letterN[2][4] = 0
letterN[3][4] = 0
letterN[4][4] = 0
letterN[5][4] = 0
letterN[6][4] = 0

export default letterN;