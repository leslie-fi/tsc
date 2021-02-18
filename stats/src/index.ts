import { CsvFileReader } from './CsvFileReader';
import {MatchReader} from './MatchReader'
import {MatchResult} from './MatchResult';

// create an object satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// create instance of MatchReader and pass in something satisfying 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()
console.log(matchReader.matches[1][2])

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  } else if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
