const path = require("path");

module.exports = Franz => {
	Franz.loop(() => {
		Franz.setBadge(document.getElementsByClassName("badge").length, 0);
	});
	Franz.injectCSS(path.join(__dirname, 'service.css'));
};