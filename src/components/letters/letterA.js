
const letterA = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterA[i] = [];
    for (let j = 0; j < columns; j++) {
        letterA[i][j] = 1;
    }
}

letterA[0][0] = 0
letterA[1][0] = 0
letterA[2][0] = 0
letterA[3][0] = 0
letterA[4][0] = 0
letterA[5][0] = 0
letterA[6][0] = 0

letterA[0][1] = 0
letterA[0][2] = 0
letterA[0][3] = 0

letterA[3][1] = 0
letterA[3][2] = 0
letterA[3][3] = 0

letterA[0][4] = 0
letterA[1][4] = 0
letterA[2][4] = 0
letterA[3][4] = 0
letterA[4][4] = 0
letterA[5][4] = 0
letterA[6][4] = 0

export default letterA;