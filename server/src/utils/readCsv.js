const csv = require('csv-parser');
const fs = require('fs');

const readCsv = async (path, cb) => {
  return new Promise(function (resolve, reject) {
    var fetchData = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on('data', (row) => {
        fetchData.push(row);
      })
      .on('end', () => {
        resolve(fetchData);
      })
      .on('error', reject);
  });
};

export default readCsv;
