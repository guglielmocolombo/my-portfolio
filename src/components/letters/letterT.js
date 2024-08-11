
const letterT = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterT[i] = [];
    for (let j = 0; j < columns; j++) {
        letterT[i][j] = 1;
    }
}

letterT[0][0] = 0
letterT[0][1] = 0
letterT[0][2] = 0
letterT[0][3] = 0
letterT[0][4] = 0

letterT[1][2] = 0
letterT[2][2] = 0
letterT[2][2] = 0
letterT[3][2] = 0
letterT[4][2] = 0
letterT[5][2] = 0
letterT[6][2] = 0

export default letterT;