/*
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-08-08 14:31:01
 * @LastEditors: 陈杰
 * @LastEditTime: 2019-08-14 22:17:06
 */
import { IConfig } from 'umi-types';

const config: IConfig = {
  plugins: [
    ['umi-plugin-block-dev', {}],
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        library: 'react',
      },
    ],
  ],
}

export default config;
