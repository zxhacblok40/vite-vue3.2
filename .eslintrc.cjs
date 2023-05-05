/* eslint-env node */
module.exports = {
  'env': {
    'node': true
  },
  'root': true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    './.eslintrc-auto-import.json'
  ],
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  'rules': {
    'vue/multi-word-component-names': 'off',
    // 这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：Possible Errors
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-invalid-regexp': 2, // 禁止 RegExp 构造函数中存在无效的正则表达式字符串
    'no-irregular-whitespace': 2, // 禁止不规则的空白
    'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
    // 这些规则是关于最佳实践的，帮助你避免一些问题: Best Practice
    'default-case': 2, // 要求 switch 语句中有 default 分支
    eqeqeq: 2, // 要求使用 === 和 !==
    'no-empty-function': 2, // 禁止出现空函数
    'no-empty-pattern': 2, // 禁止使用空解构模式
    'no-implicit-globals': 2, // 禁止在全局范围内使用变量声明和 function 声明
    'no-lone-blocks': 2, // 禁用不必要的嵌套块
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-new-func': 2, // 禁止对 Function 对象使用 new 操作符
    'no-new-wrappers': 2, // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-redeclare': 2, // 禁止多次声明同一变量
    'no-useless-catch': 2, // 禁止不必要的 catch 子句
    'no-useless-return': 2, // 禁止多余的 return 语句
    'require-await': 2, // 禁止使用不带 await 表达式的 async 函数
    // 这些规则与变量声明有关：Variables
    'init-declarations': 2, // 要求或禁止 var 声明中的初始化
    'no-label-var': 2, // 不允许标签与变量同名
    'no-shadow': 2, // 禁止变量声明与外层作用域的变量同名
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    'no-use-before-define': 2, // 禁止在变量定义之前使用它们
    // 这些规则是关于风格指南的，而且是非常主观的：Stylistic Issues
    // 'array-bracket-newline': 2, // 在数组开括号后和闭括号前强制换行
    // 'array-bracket-spacing': 2, // 强制数组方括号中使用一致的空格
    // 'array-element-newline': 2, // 强制数组元素间出现换行
    'block-spacing': 2, // 禁止或强制在代码块中开括号前和闭括号后有空格
    'brace-style': 2, // 强制在代码块中使用一致的大括号风格
    camelcase: 2, // 强制使用骆驼拼写法命名约定
    'comma-spacing': 2, // 强制在逗号前后使用一致的空格
    'comma-style': 2, // 强制使用一致的逗号风格
    'computed-property-spacing': 2, // 强制在计算的属性的方括号中使用一致的空格
    'eol-last': 2, // 要求或禁止文件末尾存在空行
    'func-call-spacing': 2, // 要求或禁止在函数标识符和其调用之间有空格
    'jsx-quotes': 2, // 强制在 JSX 属性中一致地使用双引号或单引号
    'key-spacing': 2, // 强制在对象字面量的属性中键和值之间使用一致的间距
    indent: [2, 2, { SwitchCase: 1 }], // 缩进2个空格
    quotes: [2, 'single'], // 使用单引号
    'no-mixed-spaces-and-tabs': [2], // 禁止空格和 tab 的混合缩进
    'no-extra-semi': [2], // 禁止不必要的分号
    'comma-dangle': [2, 'never'], // 禁止末尾逗号
    'no-plusplus': 2, // 禁用一元操作符 ++ 和 --
    'no-trailing-spaces': 2, // 禁用行尾空格
    'object-curly-newline': 2, // 强制大括号内换行符的一致性
    'semi-spacing': 2, // 强制分号之前和之后使用一致的空格
    'space-before-function-paren': 0, // 强制在 function的左括号之前使用一致的空格
    'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    'switch-colon-spacing': 2, // 强制在 switch 的冒号左右有空格
    'space-unary-ops': 2, // 强制在一元操作符前后使用一致的空格
    // 这些规则只与 ES6 有关, 即通常所说的 ES2015：
    'arrow-spacing': 2, // 强制箭头函数的箭头前后使用一致的空格
    'no-const-assign': 2, // 禁止修改 const 声明的变量
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    'prefer-arrow-callback': 2, // 要求回调函数使用箭头函数
    'prefer-const': 2, // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-destructuring': 2, // 优先使用数组和对象解构
    'prefer-rest-params': 2// 要求使用剩余参数而不是 arguments
  }
}
