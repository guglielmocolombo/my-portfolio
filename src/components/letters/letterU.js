
const letterU = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterU[i] = [];
    for (let j = 0; j < columns; j++) {
        letterU[i][j] = 1;
    }
}

letterU[0][0] = 0
letterU[1][0] = 0
letterU[2][0] = 0
letterU[2][0] = 0
letterU[3][0] = 0
letterU[4][0] = 0
letterU[5][0] = 0
letterU[6][0] = 0

letterU[6][1] = 0
letterU[6][2] = 0
letterU[6][3] = 0

letterU[0][4] = 0
letterU[1][4] = 0
letterU[2][4] = 0
letterU[2][4] = 0
letterU[3][4] = 0
letterU[4][4] = 0
letterU[5][4] = 0
letterU[6][4] = 0

export default letterU;