/**
 * 根据下载链接导出
 * @param url
 */
export function downloadByPath(url) {
  const $a = document.createElement('a');
  $a.href = url;
  $a.style.display = 'none';
  document.body.appendChild($a);
  $a.click();
  $a.remove();
}

/**
 * 获取当前时间/将时间戳转换为 特定格式
 * @param timeStamp 时间戳
 * @param format 特定格式
 */
export function curTime(timeStamp) {
  const addZero = (number) => number < 10 ? `0${number}` : number
  const date = timeStamp ? new Date(timeStamp) : new Date()
  const Year = date.getFullYear()
  const Month = addZero(date.getMonth() + 1)
  const Day = addZero(date.getDay())
  const Hours = addZero(date.getHours())
  const Minutes = addZero(date.getMinutes())
  const Seconds = addZero(date.getSeconds())
  return `${Year}-${Month}-${Day} ${Hours}:${Minutes}:${Seconds}`
}

