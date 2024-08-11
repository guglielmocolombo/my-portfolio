const letterI = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterI[i] = [];
    for (let j = 0; j < columns; j++) {
        letterI[i][j] = 1;
    }
}

letterI[0][2] = 0
letterI[1][2] = 0
letterI[2][2] = 0
letterI[3][2] = 0
letterI[4][2] = 0
letterI[5][2] = 0
letterI[6][2] = 0


export default letterI;