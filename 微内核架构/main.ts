import { Core, IPlugin } from './src';

class Plugin1 implements IPlugin {
  name = 'plugin1';
  constructor() {}
  apply() {}
}

class Plugin2 implements IPlugin {
  name = 'plugin2';
  constructor() {}
  apply() {}
}

// 内核初始化
const core = new Core();
// 使用插件
core.use(new Plugin1());
core.use(new Plugin2());
// 开始运行
core.run();
