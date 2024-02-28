import {
  BaseGenerator,
  installWithNpmClient,
  yParser,
  getGitInfo,
} from '@umijs/utils';
import { join } from 'path';

type GeneratorOpts = {
  cwd: string;
  args: yParser.Arguments;
};

const pkg = require('../package');

export default async ({ cwd, args }: GeneratorOpts) => {
  let npmClient = 'pnpm';
  let registry = 'https://registry.npmmirror.com';

  let [name] = args._;
  const target = name ? join(cwd, name) : cwd;
  const version = pkg.version;
  let appTemplate = 'app';
  const { username, email } = await getGitInfo();
  const author = email && username ? `${username} <${email}>` : '';

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
  installWithNpmClient({ npmClient: 'pnpm', cwd: target });
};
