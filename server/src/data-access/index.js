import path from 'path';
import writeCsv from '../utils/writeCsv';
import readCsv from '../utils/readCsv';
import makePersonCsv from './person/person-csv';

const dataPath = path.join(__dirname, './person/mock-data.csv');
const personCsv = makePersonCsv({ writeCsv, readCsv, dataPath });

export { personCsv };
