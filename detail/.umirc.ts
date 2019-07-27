import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {}],
    [
      'umi-plugin-react',
      {
        antd: true,
      },
    ],
  ],
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: '@td/design',
      style: true,
    }]
  ],
}

export default config;
