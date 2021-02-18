"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// create an object satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// create instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
console.log(matchReader.matches[1][2]);
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
    else if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
