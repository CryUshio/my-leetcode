/**
 * @reference https://leetcode-cn.com/problems/compare-version-numbers/
 */

/** 字符串分割 */
function compareVersionStringSplit(version1: string, version2: string): number {
  const ver1 = version1.split('.');
  const ver2 = version2.split('.');

  /** 比较每项数组的值 */
  while (ver1.length || ver2.length) {
    const ver1Item = +ver1.shift() || 0;
    const ver2Item = +ver2.shift() || 0;

    if (ver1Item < ver2Item) {
      return -1;
    }

    if (ver1Item > ver2Item) {
      return 1;
    }
  }

  return 0;
}

/** 双指针法，不使用额外空间 */
function compareVersion(version1: string, version2: string): number {
  let p = 0;
  let q = 0;

  let ver1 = '';
  let ver2 = '';

  while (p < version1.length || q < version2.length) {
    debugger;

    while (p < version1.length && version1[p] !== '.') {
      ver1 += version1[p++] || '';
    }
    /** 跳过点号 */
    p++;

    while (q < version2.length && version2[q] !== '.') {
      ver2 += version2[q++] || '';
    }
    /** 跳过点号 */
    q++;
    
    if (+ver1 < +ver2) {
      return -1;
    }

    if (+ver1 > +ver2) {
      return 1;
    }

    ver1 = '';
    ver2 = '';
  }

  return 0;
}

compareVersion('1.9.9.9', '1.10.0.0');


export {
  compareVersion,
  compareVersionStringSplit,
};
