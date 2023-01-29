// 修改页面中的样式变量值
const changeStyle = (themeName) => {
  if (themeName === 'dark') {
    document.querySelector('html').className = 'theme-dark'
  } else {
    document.querySelector('html').className = 'theme-light'
  }
}
// 改变主题的方法
export const setTheme = (themeName = 'light') => {
  localStorage.setItem('theme', themeName) // 保存主题到本地，下次进入使用该主题
  changeStyle(themeName)
}
