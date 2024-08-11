
const letterSpace = []
const rows  = 3
const columns = 6
for (let i = 0; i < rows; i++) {
    letterSpace[i] = [];
    for (let j = 0; j < columns; j++) {
        letterSpace[i][j] = 1;
    }
}

export default letterSpace;