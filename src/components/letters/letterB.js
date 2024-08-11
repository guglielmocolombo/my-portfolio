
const letterB = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterB[i] = [];
    for (let j = 0; j < columns; j++) {
        letterB[i][j] = 1;
    }
}

letterB[0][0] = 0
letterB[0][1] = 0
letterB[0][2] = 0
letterB[0][3] = 0
letterB[0][4] = 0

letterB[1][0] = 0
letterB[2][0] = 0
letterB[2][0] = 0
letterB[3][0] = 0
letterB[4][0] = 0
letterB[5][0] = 0

letterB[1][4] = 0
letterB[2][4] = 0

letterB[3][1] = 0
letterB[3][2] = 0
letterB[3][3] = 0
letterB[3][4] = 0

letterB[4][4] = 0
letterB[5][4] = 0

letterB[6][0] = 0
letterB[6][1] = 0
letterB[6][2] = 0
letterB[6][3] = 0
letterB[6][4] = 0

export default letterB;