const letterO = []
const rows  = 7
const columns = 6
for (let i = 0; i < rows; i++) {
    letterO[i] = [];
    for (let j = 0; j < columns; j++) {
        letterO[i][j] = 1;
    }
}


letterO[0][1] = 0
letterO[0][2] = 0
letterO[0][3] = 0

letterO[0][0] = 0
letterO[1][0] = 0
letterO[2][0] = 0
letterO[3][0] = 0
letterO[4][0] = 0
letterO[5][0] = 0
letterO[6][0] = 0

letterO[0][4] = 0
letterO[1][4] = 0
letterO[2][4] = 0
letterO[3][4] = 0
letterO[4][4] = 0
letterO[5][4] = 0
letterO[6][4] = 0

letterO[6][1] = 0
letterO[6][2] = 0
letterO[6][3] = 0

export default letterO;
