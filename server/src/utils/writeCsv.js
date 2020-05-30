const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const writeCsv = (path, data) => {
  const csvWriter = createCsvWriter({
    path,
    header: [
      { id: 'id', title: 'id' },
      { id: 'first', title: 'first' },
      { id: 'last', title: 'last' },
      { id: 'education', title: 'education' },
      { id: 'occupation', title: 'occupation' },
    ],
  });

  return new Promise(function (resolve, reject) {
    csvWriter.writeRecords(data).then(resolve).catch(reject);
  });
};

export default writeCsv;
