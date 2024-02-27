import { BaseGenerator, installWithNpmClient, yParser } from '@umijs/utils';
import { join } from 'path';

type GeneratorOpts = {
  cwd: string;
  args: yParser.Arguments;
};
export default async ({ cwd, args }: GeneratorOpts) => {
  let npmClient = 'pnpm';
  let registry = 'https://registry.npmmirror.com';

  let [name] = args._;
  const target = name ? join(cwd, name) : cwd;

  const generator = new BaseGenerator({
    path: join(__dirname, '..', 'templates', 'app'),
    target: name ? join(cwd, name) : cwd,
    data: {
      version: require('../package').version,
      npmClient,
      registry,
    },
  });
  await generator.run();
  installWithNpmClient({ npmClient: 'pnpm', cwd: target });
};
