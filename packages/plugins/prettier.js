const prettierSettings = require('umi/prettier');

module.exports = {
  ...prettierSettings,
  organizeImportsSkipDestructiveCodeActions: false,
};
