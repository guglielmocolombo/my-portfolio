
const letterW = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterW[i] = [];
    for (let j = 0; j < columns; j++) {
        letterW[i][j] = 1;
    }
}

letterW[0][0] = 0
letterW[1][0] = 0
letterW[2][0] = 0
letterW[3][0] = 0
letterW[4][0] = 0
letterW[5][0] = 0
letterW[6][0] = 0

letterW[6][1] = 0
letterW[6][2] = 0
letterW[6][3] = 0

letterW[5][2] = 0
letterW[4][2] = 0
letterW[3][2] = 0


letterW[0][4] = 0
letterW[1][4] = 0
letterW[2][4] = 0
letterW[3][4] = 0
letterW[4][4] = 0
letterW[5][4] = 0
letterW[6][4] = 0

export default letterW;