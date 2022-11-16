const fs = require('fs');
// import you json file / array here
const arr = [{ document: '123' }, { document: '123' }, { document: '321' }]

function script() {
  const result = [];

  arr.reduce((_, current) => {
    const filtered = result.find(e => e.document === current.document);

    if (filtered) {
      return;
    }
    else {
      return result.push(current)
    }
  }, [])

  return fs.writeFileSync('file.json', JSON.stringify(result, null, 2));
}

script();
