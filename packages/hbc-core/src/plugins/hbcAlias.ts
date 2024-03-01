import { IApi } from 'umi';

export default (api: IApi) => {
  api.modifyConfig((memo) => {
    memo.alias = {
      ...memo.alias,
      'hbc-core': '@@/exports',
    };
    return memo;
  });
};
