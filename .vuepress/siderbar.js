const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/blog/JavaScript';
const CSS_PATH = '/blog/CSS';
const PERFORM_PATH = '/blog/perform';
const ALGORITHM_PATH = '/blog/algorithm';
const GIT_PATH = '/blog/Git';
const HTML_PATH = '/blog/html';
const GOLANG_PATH = '/blog/Golang';
const JAVA_PATH = '/blog/Java';
const OTHER_PATH = '/blog/other';

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('JavaScript', JAVASCRIPT_PATH)],
  [CSS_PATH]: [createSideBarConfig('CSS', CSS_PATH)],
  [PERFORM_PATH]: [createSideBarConfig('behavior&mind', PERFORM_PATH)],
  [ALGORITHM_PATH]: [createSideBarConfig('算法', ALGORITHM_PATH)],
  [GIT_PATH]: [createSideBarConfig('Git', GIT_PATH)],
  [HTML_PATH]: [createSideBarConfig('HTML', HTML_PATH)],
  [GOLANG_PATH]: [createSideBarConfig('Golang', GOLANG_PATH)],
  [JAVA_PATH]: [createSideBarConfig('Java', JAVA_PATH)],
  [OTHER_PATH]: [createSideBarConfig('tools', OTHER_PATH)],
};
