import { createI18n } from 'vue-i18n';

// 导入你自己创建的语言 js 文件
import zhHant from './lang/zhHant.js';
import zhHans from './lang/zhHans.js';
import enUs from './lang/enUs.js';

// 创建 i18n 对象
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局模式，可以直接使用 $t
  locale: localStorage.getItem('lang') || 'zh-TW',
  messages: {
    'zh-TW': zhHant,
    'zh-CN': zhHans,
    'en': enUs
  }
});

export default i18n;
