import { Core } from './core';

export interface IPlugin {
  /** 插件名称 */
  name: string;
  /** 插件能力，通常是个函数，也可以叫 apply、exec、handle */
  apply: (ctx: Core) => void;
}
