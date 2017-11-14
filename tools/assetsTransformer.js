//--------------------------------------------------------------------
// This is a fix for jest handling static assets like imported images
// when running tests. It's configured in jest section of package.json
//---------------------------------------------------------------------
const path = require('path');

module.exports = {
  process(src, filename /*, config, options */) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
