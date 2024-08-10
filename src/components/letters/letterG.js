
const letterG = []
const rows  = 10
const columns = 7
for (let i = 0; i < rows; i++) {
    letterG[i] = [];
    for (let j = 0; j < columns; j++) {
        letterG[i][j] = 1;
    }
}

letterG[0][1] = 0
letterG[0][2] = 0
letterG[0][3] = 0
letterG[0][4] = 0

letterG[1][0] = 0
letterG[2][0] = 0
letterG[2][0] = 0
letterG[3][0] = 0
letterG[4][0] = 0
letterG[5][0] = 0

letterG[6][1] = 0
letterG[6][2] = 0
letterG[6][3] = 0
letterG[6][4] = 0

letterG[5][4] = 0
letterG[4][4] = 0

letterG[4][3] = 0

export default letterG;
