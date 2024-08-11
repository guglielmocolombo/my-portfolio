
const letterE = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterE[i] = [];
    for (let j = 0; j < columns; j++) {
        letterE[i][j] = 1;
    }
}

letterE[0][0] = 0
letterE[0][1] = 0
letterE[0][2] = 0
letterE[0][3] = 0
letterE[0][4] = 0

letterE[1][0] = 0
letterE[2][0] = 0
letterE[2][0] = 0
letterE[3][0] = 0
letterE[4][0] = 0
letterE[5][0] = 0

letterE[3][1] = 0
letterE[3][2] = 0
letterE[3][3] = 0
letterE[3][4] = 0

letterE[6][0] = 0
letterE[6][1] = 0
letterE[6][2] = 0
letterE[6][3] = 0
letterE[6][4] = 0

export default letterE;