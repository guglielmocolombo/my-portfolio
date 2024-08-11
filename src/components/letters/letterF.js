
const letterF = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterF[i] = [];
    for (let j = 0; j < columns; j++) {
        letterF[i][j] = 1;
    }
}

letterF[0][0] = 0
letterF[0][1] = 0
letterF[0][2] = 0
letterF[0][3] = 0
letterF[0][4] = 0

letterF[1][0] = 0
letterF[2][0] = 0
letterF[2][0] = 0
letterF[3][0] = 0
letterF[4][0] = 0
letterF[5][0] = 0
letterF[6][0] = 0

letterF[3][1] = 0
letterF[3][2] = 0
letterF[3][3] = 0
letterF[3][4] = 0

export default letterF;