
const letterM = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterM[i] = [];
    for (let j = 0; j < columns; j++) {
        letterM[i][j] = 1;
    }
}

letterM[0][0] = 0
letterM[1][0] = 0
letterM[2][0] = 0
letterM[2][0] = 0
letterM[3][0] = 0
letterM[4][0] = 0
letterM[5][0] = 0
letterM[6][0] = 0

letterM[0][1] = 0
letterM[0][2] = 0
letterM[0][3] = 0

letterM[1][2] = 0
letterM[2][2] = 0
letterM[3][2] = 0

letterM[0][4] = 0
letterM[1][4] = 0
letterM[2][4] = 0
letterM[2][4] = 0
letterM[3][4] = 0
letterM[4][4] = 0
letterM[5][4] = 0
letterM[6][4] = 0

export default letterM;