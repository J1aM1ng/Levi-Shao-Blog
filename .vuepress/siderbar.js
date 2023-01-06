const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/blog/javascript';
const CSS_PATH = '/blog/css';
const PERFORM_PATH = '/blog/perform';
const ALGORITHM_PATH = '/blog/algorithm';
const GIT_PATH = '/blog/git';
const HTML_PATH = '/blog/html';
const GOLANG_PATH = '/blog/Golang';
const JAVA_PATH = '/blog/Java';
const OTHER_PATH = '/blog/other';

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('js基础', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS基础', CSS_PATH)],
  [PERFORM_PATH]: [createSideBarConfig('前端性能相关', PERFORM_PATH)],
  [ALGORITHM_PATH]: [createSideBarConfig('算法', ALGORITHM_PATH)],
  [GIT_PATH]: [createSideBarConfig('git', GIT_PATH)],
  [HTML_PATH]: [createSideBarConfig('HTML', HTML_PATH)],
  [GOLANG_PATH]: [createSideBarConfig('Golang', GOLANG_PATH)],
  [JAVA_PATH]: [createSideBarConfig('Java', JAVA_PATH)],
  [OTHER_PATH]: [createSideBarConfig('工具', OTHER_PATH)],
};
