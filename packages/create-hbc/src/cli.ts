import { chalk, isLocalDev, yParser } from '@umijs/utils';

// 使用 yParser 解析命令行参数
const args = yParser(process.argv.slice(2), {
  // 定义参数别名
  alias: {
    version: ['v'],
    help: ['h'],
  },
  // 定义哪些参数应被视为布尔值
  boolean: ['version'],
});

// 检查是否存在 version 参数且没有其他参数
if (args.version && !args._[0]) {
  // 如果满足条件，将第一个参数设置为 'version'
  args._[0] = 'version';
  // 检查是否在本地开发环境中
  const local = isLocalDev() ? chalk.cyan('@local') : '';
  // 导入包信息
  const { name, version } = require('../package.json');
  // 打印包名和版本信息
  console.log(`${name}@${version}${local}`);
} else {
  // 如果不满足条件，执行默认导出函数
  require('./')
    .default({
      // 设置当前工作目录
      cwd: process.cwd(),
      // 传入解析后的参数
      args,
    })
    // 捕获并打印错误信息
    .catch((err: Error) => {
      console.error(`Create failed, ${err.message}`);
      console.error(err);
    });
}
