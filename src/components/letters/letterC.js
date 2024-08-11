
const letterC = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterC[i] = [];
    for (let j = 0; j < columns; j++) {
        letterC[i][j] = 1;
    }
}

letterC[0][0] = 0
letterC[0][1] = 0
letterC[0][2] = 0
letterC[0][3] = 0
letterC[0][4] = 0

letterC[1][0] = 0
letterC[2][0] = 0
letterC[2][0] = 0
letterC[3][0] = 0
letterC[4][0] = 0
letterC[5][0] = 0

letterC[6][0] = 0
letterC[6][1] = 0
letterC[6][2] = 0
letterC[6][3] = 0
letterC[6][4] = 0

export default letterC;