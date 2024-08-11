
const letterL = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterL[i] = [];
    for (let j = 0; j < columns; j++) {
        letterL[i][j] = 1;
    }
}

letterL[0][0] = 0
letterL[1][0] = 0
letterL[2][0] = 0
letterL[2][0] = 0
letterL[3][0] = 0
letterL[4][0] = 0
letterL[5][0] = 0
letterL[6][0] = 0

letterL[6][1] = 0
letterL[6][2] = 0
letterL[6][3] = 0
letterL[6][4] = 0

export default letterL;