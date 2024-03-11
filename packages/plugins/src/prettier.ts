// const prettierSettings = require('umi/prettier');
//
// module.exports = {
//   ...prettierSettings,
//   organizeImportsSkipDestructiveCodeActions: true,
// };

import prettierSettings from 'umi/prettier';

export default {
  ...prettierSettings,
  organizeImportsSkipDestructiveCodeActions: true,
};
