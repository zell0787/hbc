import {
  BaseGenerator,
  installWithNpmClient,
  yParser,
  getGitInfo,
  execa,
  logger,
  clackPrompts,
  chalk,
} from '@umijs/utils';
import { existsSync } from 'fs';
import { join } from 'path';

type GeneratorOpts = {
  cwd: string;
  args: yParser.Arguments;
};

interface IContext {
  projectRoot: string;
}

const pkg = require('../package');

export default async ({ cwd, args }: GeneratorOpts) => {
  let [name] = args._;
  let npmClient = 'pnpm';
  let registry = 'https://registry.npmmirror.com';
  let appTemplate = 'app';
  const { username, email } = await getGitInfo();
  const author = email && username ? `${username} <${email}>` : '';
  const target = name ? join(cwd, name) : cwd;
  const version = pkg.version;
  let base = '';
  let publicPath = '';
  let appId = '';
  const { text, intro, outro } = clackPrompts;

  const inputBase = async () => {
    base = (await text({
      message: '请输入路由前缀(例如/hbc/)',
      validate: (value) => {
        if (!value?.length) {
          return '请输入路由前缀';
        }
        if (value) {
          // 正则验证value是否符合/demo/
          const reg = /^\/[a-zA-Z0-9]+\/$/;
          if (!reg.test(value)) {
            return '请输入正确的路由前缀';
          }
        }
      },
      initialValue: '/',
    })) as string;
  };

  const inputPublishPath = async () => {
    publicPath = (await text({
      message: '请输入publicPath(例如/hbc/)',
      validate: (value) => {
        if (!value?.length) {
          return '请输入publicPath';
        }
        if (value) {
          // 正则验证value是否符合/demo/
          const reg = /^\/[a-zA-Z0-9]+\/$/;
          if (!reg.test(value)) {
            return '请输入正确的publicPath';
          }
        }
      },
      initialValue: base,
    })) as string;
  };

  const inputAppId = async () => {
    appId = (await text({
      message: '请输入appId(例如hbc)',
      validate: (value) => {
        if (!value?.length) {
          return '请输入appId';
        }
        if (value) {
          // 正则验证value是否符合 数字字母组合
          const reg = /^[a-zA-Z0-9]+$/;
          if (!reg.test(value)) {
            return '请输入正确的appId';
          }
        }
      },
      initialValue: '',
    })) as string;
  };

  // prompts
  const internalTemplatePrompts = async () => {
    intro(chalk.bgHex('#19BDD2')(' create-hbc '));

    await inputBase();
    await inputPublishPath();
    await inputAppId();

    outro(chalk.green(`You're all set!`));
  };

  await internalTemplatePrompts();

  // git
  const shouldInitGit = args.git !== false;

  const generator = new BaseGenerator({
    path: join(__dirname, '..', 'templates', appTemplate),
    target: name ? join(cwd, name) : cwd,
    data: {
      version,
      base,
      publicPath,
      appId,
      npmClient,
      registry,
      author,
      email,
    },
  });
  await generator.run();

  const context: IContext = {
    projectRoot: target,
  };

  // init git
  if (shouldInitGit) {
    await initGit(context);
  } else {
    logger.info(`Skip Git init`);
  }

  // install deps
  if (args.install !== false) {
    installWithNpmClient({ npmClient: 'pnpm', cwd: target });
  } else {
    logger.info(`Skip install deps`);
  }
};

async function initGit(opts: IContext) {
  const { projectRoot } = opts;
  const isGit = existsSync(join(projectRoot, '.git'));
  if (isGit) return;
  try {
    await execa.execa('git', ['init'], { cwd: projectRoot });
  } catch {
    logger.error(`Initial the git repo failed`);
  }
}
