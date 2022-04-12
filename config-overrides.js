const { override } = require('customize-cra');
const addLessLoader = require('customize-cra-less-loader');

module.exports = override(
  addLessLoader({
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          'primary-color': '#f37c61',
          'link-color': '#f37c61',
          'border-radius-base': '2px',

        },
        javascriptEnabled: true,
      },
    },
  }),
);