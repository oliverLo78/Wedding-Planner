const path = require('path');

module.exports = {
  // Here is an example of how to configure Webpack to resolve the 'react-bootstrap-table2-filter' module
  resolve: {
    alias: {
      'react-bootstrap-table-next': path.resolve(__dirname, 'node_modules/react-bootstrap-table-next'),
    },
  },
};
