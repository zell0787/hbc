import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyAppData((memo) => {
    memo.umi.name = 'hbc-core';
    memo.umi.importSource = 'hbc-core';
    memo.umi.cliName = 'hbc';
    return memo;
  });
};
