'use strict';

var mitt = require('mitt');

class Core {
  constructor() {
    this.pluginMap = new Map();
    this.events = mitt();
    this.events.emit('beforeInit');
    console.log('实现文档初始化');
    this.events.emit('afterInit');
  }
  /** 插件的注册 通常以注册表的形式实现（对象的映射） */
  use(plugin) {
    this.pluginMap.set(plugin.name, plugin);
    return this;
  }
  /** 插件执行 */
  run() {
    this.events.emit('beforeRunPlugin');
    /**
     * 插件的调度
     * 1. 管道式： 插件直接顺序执行，将上一步的结果传递给下一个插件
     * 2. 洋葱式：插件也是顺序执行，但是会经过两次 (webpack 中loader的执行有点类似，首先会执行patch然后在执行loader)
     * 3. 集散式：插件独立作用，和顺序无关，一般不会修改内核，而是扩展各种功能
     *
     * 插件的安全性 采用沙箱 控制插件访问内核的能力
     */
    this.pluginMap.forEach((plugin) => {
      plugin.apply(this);
    });
    this.events.emit('afterRunPlugin');
  }
}

class Plugin1 {
  constructor() {
    this.name = 'plugin1';
  }
  apply() {}
}
class Plugin2 {
  constructor() {
    this.name = 'plugin2';
  }
  apply() {}
}
// 内核初始化
const core = new Core();
// 使用插件
core.use(new Plugin1());
core.use(new Plugin2());
// 开始运行
core.run();
