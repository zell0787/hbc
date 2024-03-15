{
  "private": true,
  "author": "{{{ author }}}",
  "scripts": {
    "dev": "hbc dev",
    "start": "hbc dev",
    "build": "hbc build",
    "format": "prettier --cache --write .",
    "prepare": "husky install"
  },
  "dependencies": {
    "hbc-core": "{{{ version }}}",
    "antd": "^5.14.0",
    "@ant-design/icons": "^5.0.1",
    "lodash": "^4.17.21"
  },
  "devDependencies": {
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "@types/lodash": "^4.14.191",
    "@hbcjs/lint": "0.1.0",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.0",
    "prettier": "^2.8.7",
    "prettier-plugin-organize-imports": "^3.2.2",
    "prettier-plugin-packagejson": "^2.4.3",
    "typescript": "^5.0.3",
    "cross-env": "^7.0.3",
    "address": "^1.1.2",
    "stylelint": "14.8.2"
  }
}
