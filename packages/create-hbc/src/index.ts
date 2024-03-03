import {
  BaseGenerator,
  installWithNpmClient,
  yParser,
  getGitInfo,
  execa,
  logger,
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

  // git
  const shouldInitGit = args.git !== false;

  const generator = new BaseGenerator({
    path: join(__dirname, '..', 'templates', appTemplate),
    target: name ? join(cwd, name) : cwd,
    data: {
      version,
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
  installWithNpmClient({ npmClient: 'pnpm', cwd: target });
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
