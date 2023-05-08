document.getElementById("myElement").style.cssText = `
	display: block;
	position: absolute;
`;

document.addEventListener("keydown", e => {
	if (e.key.toLowerCase() === "u"
		&& e.ctrlKey
	) {
		alert("U key");
	}
});



(function () {
	var pre = document.querySelectorAll('ul.code pre'),
		pl = pre.length;
	for (var i = 0; i < pl; i++) {
		pre[i].innerHTML = '<div class="line-number"></div>' + pre[i].innerHTML;
		var num = pre[i].innerHTML.split(/\n/).length;
		for (var j = 0; j < num - 1; j++) {
			var line_num = pre[i].getElementsByTagName('div')[0];
			line_num.innerHTML += '<span>' + (j + 1) + '</span>';
		}
	}
})();