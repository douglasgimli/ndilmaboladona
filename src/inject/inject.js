chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		var random, width, height;
		var images = document.getElementsByTagName('img');
		for(var i = 0 ; i < images.length ; i++) {
			if (images[i].changed != 'true') {
				width = images[i].width;
				height = images[i].height;
				random = 1 + Math.round(Math.random() * 24);
				images[i].src = chrome.extension.getURL('src/images/dilma' + random + '.jpg');
				images[i].style.width = width + 'px';
				images[i].style.height = height + 'px';
				images[i].changed = 'true';
			}
		}
		clearInterval(readyStateCheckInterval);
	}
	}, 100);
});