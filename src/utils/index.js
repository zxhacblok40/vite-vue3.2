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
