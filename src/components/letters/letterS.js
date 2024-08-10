const letterS = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterS[i] = [];
    for (let j = 0; j < columns; j++) {
        letterS[i][j] = 1;
    }
}


letterS[0][1] = 0
letterS[0][2] = 0
letterS[0][3] = 0
letterS[0][4] = 0

letterS[1][0] = 0
letterS[2][0] = 0
letterS[6][0] = 0

letterS[3][1] = 0
letterS[3][2] = 0
letterS[3][3] = 0

letterS[4][4] = 0
letterS[5][4] = 0

letterS[6][0] = 0
letterS[6][1] = 0
letterS[6][2] = 0
letterS[6][3] = 0

export default letterS;
