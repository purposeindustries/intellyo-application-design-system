exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.loader('markdown', {
        test: /\.md$/,
        loader: 'html!markdown'
      });
      break;
  }
};
