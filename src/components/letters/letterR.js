
const letterR = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterR[i] = [];
    for (let j = 0; j < columns; j++) {
        letterR[i][j] = 1;
    }
}

letterR[0][0] = 0
letterR[1][0] = 0
letterR[2][0] = 0
letterR[3][0] = 0
letterR[4][0] = 0
letterR[5][0] = 0
letterR[6][0] = 0

letterR[0][1] = 0
letterR[0][2] = 0
letterR[0][3] = 0
letterR[0][4] = 0

letterR[1][4] = 0
letterR[2][4] = 0

letterR[3][1] = 0
letterR[3][2] = 0
letterR[3][3] = 0
letterR[3][4] = 0

letterR[4][2] = 0
letterR[5][3] = 0
letterR[6][4] = 0

export default letterR;