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
    "@ant-design/icons": "^5.0.1"
  },
  "devDependencies": {
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "husky": "^8.0.3",
    "lint-staged": "^13.2.0",
    "prettier": "^2.8.7",
    "prettier-plugin-organize-imports": "^3.2.2",
    "prettier-plugin-packagejson": "^2.4.3",
    "typescript": "^5.0.3"
  }
}
