import letterA from "./letterA"
import letterB from "./letterB"
import letterC from "./letterC"
import letterE from "./letterE"
import letterF from "./letterF"
import letterG from "./letterG"
import letterI from "./letterI"
import letterL from "./letterL"
import letterM from "./letterM"
import letterN from "./letterN"
import letterO from "./letterO"
import letterR from "./letterR"
import letterS from "./letterS"
import letterSpace from "./letterSpace"
import letterT from "./letterT"
import letterU from "./letterU"
import letterW from "./letterW"

const letterCollections = new Map()
letterCollections.set("S", letterS)
letterCollections.set("O", letterO)
letterCollections.set("F", letterF)
letterCollections.set("T", letterT)
letterCollections.set("W", letterW)
letterCollections.set("A", letterA)
letterCollections.set("R", letterR)
letterCollections.set("E", letterE)
letterCollections.set("N", letterN)
letterCollections.set("G", letterG)
letterCollections.set("U", letterU)
letterCollections.set("I", letterI)
letterCollections.set("L", letterL)
letterCollections.set("M", letterM)
letterCollections.set("C", letterC)
letterCollections.set("B", letterB)
letterCollections.set(" ", letterSpace)


export default letterCollections