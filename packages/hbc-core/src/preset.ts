export default () => {
  return {
    plugins: [
      require.resolve('./plugins/hbcAlias'),
      require.resolve('./plugins/hbcAppData'),
      require.resolve('./plugins/hbcChecker'),
    ],
  };
};
