const { createSideBarConfig } = require('./util');
const JAVASCRIPT_PATH = '/blog/JavaScript';
const ALGORITHM_PATH = '/blog/algorithm';
const GIT_PATH = '/blog/Git';
const GOLANG_PATH = '/blog/Golang';
const JAVA_PATH = '/blog/Java';

module.exports = {
  [JAVASCRIPT_PATH]: [createSideBarConfig('JavaScript', JAVASCRIPT_PATH)],
  [ALGORITHM_PATH]: [createSideBarConfig('algorithm', ALGORITHM_PATH)],
  [GIT_PATH]: [createSideBarConfig('Git', GIT_PATH)],
  [GOLANG_PATH]: [createSideBarConfig('Golang', GOLANG_PATH)],
  [JAVA_PATH]: [createSideBarConfig('Java', JAVA_PATH)],
};
