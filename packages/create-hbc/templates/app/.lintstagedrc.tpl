{
  "*.{md,json}": [
    "prettier --cache --write"
  ],
  "*.{js,jsx}": [
    "hbc lint --fix --eslint-only",
    "prettier --cache --write"
  ],
  "*.{css,less}": [
    "hbc lint --fix --stylelint-only",
    "prettier --cache --write"
  ],
  "*.ts?(x)": [
    "hbc lint --fix --eslint-only",
    "prettier --cache --parser=typescript --write"
  ]
}
