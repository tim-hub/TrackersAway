const shajs = require('sha.js');

module.exports={
  hash: (data) => shajs('sha256').update(data).digest('hex'),
};
