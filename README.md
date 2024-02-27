# hbc 

1. 预发布

```bash
pnpm changeset pre enter <tag>
# alpha	是内部测试版，一般不向外部发布，会有很多Bug，一般只有测试人员使用
# beta	也是测试版，这个阶段的版本会一直加入新的功能。在Alpha版之后推出
# rc	(Release　Candidate) 发行候选版本。RC版不会再加入新的功能了，主要着重于除错
pnpm changeset pre exit
pnpm changeset
# major minor patch
# 1.0.0
pnpm changeset version
pnpm changeset publish
# npm规定包名中，@后是用户名 或者是组织
```

2. 正式发布

```bash
pnpm changeset
pnpm changeset version
pnpm changeset publish
```
