const path = require('path');

module.exports = (Franz) => {
  const getMessages = function getMessages() {
    Franz.setBadge(count);
  };
  Franz.loop(() => {Franz.setBadge(document.getElementsByClassName("badge").map(b => b.textContent).reduce((a, b) => parseInt(a) + parseInt(b), 0))});
};
